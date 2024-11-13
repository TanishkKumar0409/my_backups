import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./Routes/Index.js";
import cors from "cors";

dotenv.config();

// const PORT = process.env.PORT;
const PORT=4000;

const DbName = process.env.DbName;

const app = express();

app.use(express.static("public"));

app.use("/Uploads", express.static("Uploads"));

app.use(cors());

app.use(bodyParser.json());

app.use("/api/", router);

mongoose
  .connect(DbName)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log({ error: error.message });
  });

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
