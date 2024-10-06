import express from "express";
import {
  addUser,
  getUsers,
  getOneUsers,
  deleteUser,
  updateUser,
  updateManyUser,
  deleteManyUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/user", getUsers);

router.get("/user/:id", getOneUsers);

router.post("/add-user", addUser);

router.delete("/delete-user/:id", deleteUser);

router.delete("/delete-many/:batch", deleteManyUser);

router.put("/update-user/:id", updateUser);

router.put("/update-many/:batch", updateManyUser);

export default router;
