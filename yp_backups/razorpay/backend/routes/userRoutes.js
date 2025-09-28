import express from "express";
import { createOrGetUser } from "../controllers/userController.js";

const router = express.Router();
router.post("/", createOrGetUser);

export default router;
