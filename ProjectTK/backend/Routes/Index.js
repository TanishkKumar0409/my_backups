import express from "express";
import RegisterUser from "../Controllers/Users/RegisterUser.js";
import multer from "multer"
import getUsers from "../Controllers/Users/GetUsers.js";
import getUserByUsername from "../Controllers/Users/GetUserByUsername.js";
import DeleteUser from "../Controllers/Users/DeleteUser.js";
import UpdateByUser from "../Controllers/Users/UpdateByUser.js";
import Login from "../Controllers/Users/Login.js";
import ShareFiles from "../Controllers/SharedFiles/ShareFile.js";
import { DownloadFiles } from "../Controllers/SharedFiles/DownloadFiles.js";

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
router.post("/user/login", Login)

router.get("/user/all", getUsers)
router.get("/user/:username", getUserByUsername)

router.put("/user/delete/:username", DeleteUser)
router.put("/user/update/:username", uploadProfile.single("profile"), UpdateByUser)

const FileShare = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './')
    },
    filename: function (req, file, cb) {
        cb(null, "Uploads/shareFiles/" + Date.now() + file.originalname + ".jpg")
    }
})

const UploadFileShare = multer({ storage: FileShare })

router.post("/share/:username", UploadFileShare.array("files", 10), ShareFiles)


router.get("/share/download/:sharingId",DownloadFiles)


export default router