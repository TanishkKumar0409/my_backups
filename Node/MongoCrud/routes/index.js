import express from "express";
import { getUser, addUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/user");

router.post("/user/new");

export default router;
