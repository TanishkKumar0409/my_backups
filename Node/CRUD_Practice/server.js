import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT;

const DbName = process.env.DbName;

const App = express();

App.listen(PORT, () => {
  console.log(`Server Running at http:/localhost:${PORT}`);
});
