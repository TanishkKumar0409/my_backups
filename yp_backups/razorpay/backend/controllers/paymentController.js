import crypto from "crypto";
import razorpay from "../helper/razorpayInstance.js";
import paypalClient from "../helper/paypalClient.js";
import paypal from "@paypal/checkout-server-sdk";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

// =====================
// RAZORPAY ORDER
// =====================
export const createOrder = async (req, res) => {
  const { name, email, mobile, amount } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, mobile });
    }

    const options = {
      amount: amount * 100, // amount in paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    await Transaction.create({
      user: user._id,
      payment_method: "razorpay",
      razorpay_order_id: order.id,
      amount,
      currency: order.currency,
      status: "created",
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =====================
// RAZORPAY VERIFY
// =====================
export const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  try {
    if (!razorpay_payment_id || !razorpay_signature) {
      await Transaction.findOneAndUpdate(
        { razorpay_order_id, payment_method: "razorpay" },
        { status: "failed" }
      );
      return res.status(200).json({ status: "failed" });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      await Transaction.findOneAndUpdate(
        { razorpay_order_id, payment_method: "razorpay" },
        {
          razorpay_payment_id,
          razorpay_signature,
          status: "success",
        }
      );
      return res.status(200).json({ status: "success" });
    } else {
      await Transaction.findOneAndUpdate(
        { razorpay_order_id, payment_method: "razorpay" },
        { status: "failed" }
      );
      return res.status(400).json({ status: "invalid-signature" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// =====================
// PAYPAL CREATE ORDER
// =====================
export const createPaypalOrder = async (req, res) => {
  const { name, email, mobile, amount } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, mobile });
    }

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount.toString(),
          },
        },
      ],
    });

    const order = await paypalClient().execute(request);

    await Transaction.create({
      user: user._id,
      payment_method: "paypal",
      paypal_order_id: order.result.id,
      amount,
      currency: "USD",
      status: "created",
    });

    res.json({ id: order.result.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =====================
// PAYPAL CAPTURE ORDER
// =====================
export const capturePaypalOrder = async (req, res) => {
  const { orderID } = req.body;

  try {
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    const capture = await paypalClient().execute(request);
    const paymentId =
      capture.result.purchase_units[0].payments.captures[0].id || "unknown";

    await Transaction.findOneAndUpdate(
      { paypal_order_id: orderID, payment_method: "paypal" },
      {
        paypal_payment_id: paymentId,
        status: "success",
      }
    );

    res.json({ status: "success", details: capture.result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
