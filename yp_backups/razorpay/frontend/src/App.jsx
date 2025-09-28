// App.jsx
import React, { useState } from "react";
import ProductTable from "./components/ProductTable";
import UserFormModal from "./components/UserForm";
import axios from "./api/axios";
import productsData from "./data.json";

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [amountToPay, setAmountToPay] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [pendingPaymentMethod, setPendingPaymentMethod] = useState(null);

  const toggleProduct = (product) => {
    const exists = selectedProducts.some((p) => p.id === product.id);
    setSelectedProducts(
      exists
        ? selectedProducts.filter((p) => p.id !== product.id)
        : [...selectedProducts, product]
    );
  };

  const buySelected = () => {
    const total = selectedProducts.reduce((sum, p) => sum + p.price, 0);
    setAmountToPay(total);
    setPendingPaymentMethod(paymentMethod);
    setIsModalOpen(true);
  };

  const buySingle = (product) => {
    setSelectedProducts([product]);
    setAmountToPay(product.price);
    setPendingPaymentMethod("razorpay");
    setIsModalOpen(true);
  };

  const buySingleViaPayPal = (product) => {
    setSelectedProducts([product]);
    setAmountToPay(product.price);
    setPendingPaymentMethod("paypal");
    setIsModalOpen(true);
  };
  const handleRazorpay = async () => {
    try {
      // ✅ Always create a new order for every attempt
      const res = await axios.post("/api/payment/create-order", {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        amount: amountToPay,
      });

      const order = res.data;
      const orderId = order.id;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "Tanishk Store",
        description: "Product Purchase",
        order_id: orderId,

        handler: async (response) => {
          try {
            await axios.post("/api/payment/verify-payment", {
              razorpay_order_id: orderId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            alert("✅ Payment Successful!");
            setSelectedProducts([]);
            setFormData({ name: "", email: "", mobile: "" });
          } catch (err) {
            console.error("Error verifying payment:", err);
            alert("Verification Failed!");
          }
        },

        modal: {
          ondismiss: async () => {
            console.log("Modal dismissed — sending failed status");

            try {
              await axios.post("/api/payment/verify-payment", {
                razorpay_order_id: orderId,
                razorpay_payment_id: null,
                razorpay_signature: null,
              });
              alert("❌ Payment Cancelled");
            } catch (err) {
              console.error("Failed to report cancellation:", err);
            }
          },
        },

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },

        theme: { color: "#528FF0" },
      };

      const rzp = new window.Razorpay(options);

      // ✅ Handle internal payment failure
      rzp.on("payment.failed", async (response) => {
        console.error("❌ Payment failed:", response.error);
        const { order_id, payment_id } = response.error.metadata;

        try {
          await axios.post("/api/payment/verify-payment", {
            razorpay_order_id: order_id,
            razorpay_payment_id: payment_id,
            razorpay_signature: null,
          });
          alert("❌ Payment Failed");
        } catch (err) {
          console.error("Failed to report failed payment:", err);
        }
      });

      rzp.open();
    } catch (err) {
      console.error("Payment Error:", err);
      alert("❌ Could not initiate payment.");
    }
  };

  const handlePayPal = async () => {
    try {
      const res = await axios.post("/api/payment/create-paypal-order", {
        ...formData,
        amount: amountToPay,
      });
      const orderId = res.data.id;

      const paypalContainer = document.getElementById(
        "paypal-button-container"
      );
      paypalContainer.innerHTML = "";

      if (!window.paypal) {
        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${
          import.meta.env.VITE_PAYPAL_KEY
        }&currency=USD`;
        script.onload = () => renderPayPalButtons(orderId);
        document.body.appendChild(script);
      } else {
        renderPayPalButtons(orderId);
      }
    } catch (err) {
      console.error(err);
      alert("PayPal payment setup failed.");
    }
  };

  const renderPayPalButtons = (orderId) => {
    window.paypal
      .Buttons({
        createOrder: () => orderId,
        onApprove: async (data) => {
          await axios.post("/api/payment/capture-paypal-order", {
            orderID: data.orderID,
          });
          alert("✅ PayPal Payment Successful!");
        },
      })
      .render("#paypal-button-container");
  };

  const handlePayment = () => {
    setIsModalOpen(false);
    pendingPaymentMethod === "razorpay" ? handleRazorpay() : handlePayPal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-5xl font-black text-center text-indigo-700 mb-8">
          🛍️ Tanishk Store
        </h1>

        <ProductTable
          products={productsData}
          selectedProducts={selectedProducts}
          toggleProduct={toggleProduct}
          buySingle={buySingle}
          buySingleViaPayPal={buySingleViaPayPal}
        />

        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="flex gap-6 text-lg font-medium">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="razorpay"
                checked={paymentMethod === "razorpay"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              Razorpay
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              PayPal
            </label>
          </div>
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg shadow hover:bg-indigo-700 transition disabled:opacity-50"
            onClick={buySelected}
            disabled={selectedProducts.length === 0}
          >
            Proceed to Pay ₹{amountToPay}
          </button>
        </div>

        <UserFormModal
          isOpen={isModalOpen}
          formData={formData}
          setFormData={setFormData}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handlePayment}
        />

        {pendingPaymentMethod === "paypal" && (
          <div
            id="paypal-button-container"
            className="mt-6 flex justify-center"
          />
        )}
      </div>
    </div>
  );
};

export default App;
