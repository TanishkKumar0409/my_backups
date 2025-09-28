// helper/paypalClient.js
import * as paypal from "@paypal/checkout-server-sdk";
import dotenv from "dotenv";
dotenv.config();

function environment() {
  return new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_KEY,
    process.env.PAYPAL_SECRET
  );
}

function client() {
  return new paypal.core.PayPalHttpClient(environment());
}

export default client;
