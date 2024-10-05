import express from "express";
import {
  addUser,
  getUsers,
  getOneUsers,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/user", getUsers);

router.get("/user/:id", getOneUsers);

router.post("/add-user", addUser);

router.delete("/delete-user/:id", deleteUser);

export default router;
