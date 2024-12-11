import express from "express";
import RegisterUser from "../Controllers/Users/RegisterUser.js";
import multer from "multer"
import getUsers from "../Controllers/Users/GetUsers.js";
import getUserByUsername from "../Controllers/Users/GetUserByUsername.js";

const router = express.Router()

const UserProfileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './')
    },
    filename: function (req, file, cb) {
        cb(null, "Uploads/Users/" + Date.now() + ".jpg")
    }
})

const uploadProfile = multer({ storage: UserProfileStorage })

router.post("/user/register", uploadProfile.single("profile"), RegisterUser)

router.get("/user/all", getUsers)
router.get("/user/:username", getUserByUsername)

export default router