import express from "express";
import multer from "multer";

import addAdmin from "../controllers/Admins/AddAdmin.js";
import login from "../controllers/Admins/login.js";
import deleteAdmin from "../controllers/Admins/DeleteAdmin.js";
import getIdAdmin from "../controllers/Admins/getAdminById.js";
import updateAdmin from "../controllers/Admins/UpdateAdmin.js";

import addUser from "../controllers/Users/AddUser.js";
import getAllUsers from "../controllers/Users/getAllUsers.js";
import getIdUser from "../controllers/Users/getUserById.js";
import UpdateUser from "../controllers/Users/UpdateUser.js";
import deleteUser from "../controllers/Users/deleteUser.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./");
  },
  filename: function (req, file, cb) {
    cb(null, "Uploads/" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add-admin", upload.single("profile"), addAdmin);
router.post("/login", login);
router.delete("/delete-admin/:id", deleteAdmin);
router.put("/update-admin/:id", upload.single("profile"), updateAdmin);
router.get("/get-admin/:id", getIdAdmin);

router.post("/user/add", upload.single("profile"), addUser);
router.get("/user/all", getAllUsers);
router.get("/user/:id", getIdUser);
router.put("/user/update/:id", upload.single("profile"), UpdateUser);
router.delete("/user/delete/:id", deleteUser);

export default router;
