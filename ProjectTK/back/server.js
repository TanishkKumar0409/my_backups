require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = require('./Routes/Index');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 8000;
const DbName = process.env.DbName;

app.use(cors())

app.use(bodyParser.json());

app.use("/api/", router)

mongoose.connect(DbName).then(() => {
    console.log("DB Connected")
}).catch((err) => {
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
