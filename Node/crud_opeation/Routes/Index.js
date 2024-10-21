import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  getUsersById,
  updateUser,
} from "../Controllers/UserController.js";

const router = express.Router();

router.get("/user", getUsers);
router.get("/user/:id", getUsersById);
router.post("/user/new", addUser);
router.put("/user/current/:id", updateUser);
router.delete("/user/delete/:id", deleteUser);

export default router;
