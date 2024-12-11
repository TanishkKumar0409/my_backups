import express from "express";
import RegisterUser from "../Controllers/Users/RegisterUser.js";

const router = express.Router()

router.post("/register", RegisterUser)

export default router