import express from "express";
import {
  getUser,
  addUser,
  getUserById,
  UpdateUser,
  deleteUser,
} from "../controllers/UserController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "media");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/user", getUser);

router.get("/user/:id", getUserById);

router.post("/user/new", addUser);

router.put("/user/current/:id", UpdateUser);

router.delete("/user/delete/:id", deleteUser);

export default router;
