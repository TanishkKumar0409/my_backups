import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config()

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.use("/api/", router);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected.")
    }).catch((error) => {
        console.log("Database not connected." + error.message)
    })

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});