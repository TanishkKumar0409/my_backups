import express from "express";
import { addUser, getUsers } from "../controllers/UserController";

const router = express.Router();

router.get("/user", getUsers);

router.post("/add-user", addUser);

export default router;
