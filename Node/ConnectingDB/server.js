import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT;

const DbName = process.env.MongoUrl;

const App = express();

App.use(bodyParser.json());

App.use("/api/", router);

mongoose
  .connect(DbName)
  .then(console.log("Database Connected"))
  .catch((error) => {
    console.log("Database not Connected", error.message);
  });

App.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
