import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  getUsersById,
  updateUser,
} from "../Controllers/UserController.js";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/user", getUsers);
router.get("/user/:id", getUsersById);
router.post("/user/new", upload.single("profile"), addUser);
router.put("/user/current/:id", updateUser);
router.delete("/user/delete/:id", deleteUser);

export default router;
