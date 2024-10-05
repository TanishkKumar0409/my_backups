import express from "express";
import { addUser, getUsers } from "../controller/UserController.js";

const router = express.Router();

router.get("/user", getUsers);
router.post("/add-user", addUser);

export default router;