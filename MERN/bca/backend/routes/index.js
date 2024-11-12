import express from "express";
import addAdmin from "../controllers/Admins/AddAdmin.js";
import login from "../controllers/Admins/login.js";
import multer from "multer";
import deleteAdmin from "../controllers/Admins/DeleteAdmin.js";

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

export default router;
