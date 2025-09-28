import express from "express";
import {
  createOrder,
  verifyPayment,
  createPaypalOrder,
  capturePaypalOrder,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);

router.post("/create-paypal-order", createPaypalOrder);
router.post("/capture-paypal-order", capturePaypalOrder);

export default router;
