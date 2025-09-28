import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  payment_method: {
    type: String,
    enum: ["razorpay", "paypal"],
    required: true,
  },

  // Common
  amount: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  status: { type: String, default: "created" },

  // Razorpay
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,

  // PayPal
  paypal_order_id: String,
  paypal_payment_id: String,

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", transactionSchema);
