import express from "express";
import multer from "multer";
import addUser from "../Controllers/AddUser.js";
import GetAllUsers from "../Controllers/GetAllUsers.js";
import getUsersById from "../Controllers/GetUserByID.js";
import updateUser from "../Controllers/UpdateUser.js";
import deleteUser from "../Controllers/DeleteUser.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./");
  },

  filename: function (req, file, cb) {
    cb(null, `Uploads/${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/user/new", upload.single("profile"), addUser);

router.get("/user", GetAllUsers);

router.get("/user/:id", getUsersById);

router.put("/user/current/:id", upload.single("profile"), updateUser);

router.delete("/user/delete/:id", deleteUser);

export default router;
