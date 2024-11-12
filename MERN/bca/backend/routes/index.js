import express from "express";
import addAdmin from "../controllers/Admins/AddAdmin.js";
import login from "../controllers/Admins/login.js";
import multer from "multer";
import deleteAdmin from "../controllers/Admins/DeleteAdmin.js";
import getIdUser from "../controllers/Admins/getAdminById.js";
import updateAdmin from "../controllers/Admins/UpdateAdmin.js";

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
router.get("/get-admin/:id", getIdUser);

export default router;
