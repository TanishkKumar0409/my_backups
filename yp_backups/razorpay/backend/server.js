import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import paymentRoutes from "./routes/paymentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Routes
app.use("/api/payment", paymentRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Razorpay server with DB is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
