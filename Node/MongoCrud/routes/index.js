import express from "express";
import {
  getUser,
  addUser,
  getUserById,
  UpdateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/user", getUser);

router.get("/user/:id", getUserById);

router.post("/user/new", addUser);

router.put("/user/current/:id", UpdateUser);

router.delete("/user/delete/:id", deleteUser);

export default router;
