import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT;

const DbName = process.env.DbName;

const App = express();

mongoose
  .connect(DbName)
  .then(() => {
    console.log(`Database Connected`);
  })
  .catch((error) => {
    console.log(`Database not Connected`, error);
  });

App.listent(PORt, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
