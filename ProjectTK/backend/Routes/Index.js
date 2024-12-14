import express from "express";
import RegisterUser from "../Controllers/Users/RegisterUser.js";
import multer from "multer"
import getUsers from "../Controllers/Users/GetUsers.js";
import getUserByUsername from "../Controllers/Users/GetUserByUsername.js";
import DeleteUser from "../Controllers/Users/DeleteUser.js";
import UpdateByUser from "../Controllers/Users/UpdateByUser.js";
import Login from "../Controllers/Users/Login.js";
import ShareFiles from "../Controllers/SharedFiles/ShareFile.js";
import { DownloadFiles } from "../Helper/DownloadFiles/DownloadFiles.js";
import blockUser from "../Controllers/Admin/BlockUser.js";
import createAdmin from "../Controllers/Admin/CreateAdmin.js";
import getSharedHistory from "../Controllers/SharedFiles/GetSharedHistory.js";
import getSharedHistoryBySharingId from "../Controllers/SharedFiles/GetSharedHistoryBySharingId.js";
import getSharedHistoryByUsername from "../Controllers/SharedFiles/GetSharedHistoryByUsername.js";

const router = express.Router()

//? User profile Multer
const UserProfileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './')
    },
    filename: function (req, file, cb) {
        cb(null, "Uploads/Users/" + Date.now() + ".jpg")
    }
})

const uploadProfile = multer({ storage: UserProfileStorage })

//? Sharing File Multer
const FileShare = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './')
    },
    filename: function (req, file, cb) {
        cb(null, "Uploads/shareFiles/" + Date.now() + file.originalname + ".jpg")
    }
})

const UploadFileShare = multer({ storage: FileShare })

//? Users Routes
router.post("/user/register", uploadProfile.single("profile"), RegisterUser)
router.post("/user/login", Login)
router.get("/user/all", getUsers)
router.get("/user/:username", getUserByUsername)
router.put("/user/delete/:username", DeleteUser)
router.put("/user/update/:username", uploadProfile.single("profile"), UpdateByUser)

//? Admin Actions
router.put("/user/block/:username", blockUser)
router.put("/user/promote/:username", createAdmin)

//? Sharing Routes
router.post("/share/:username", UploadFileShare.array("files", 10), ShareFiles)
router.get("/share/download/:sharingId", DownloadFiles)
router.get("/share/history", getSharedHistory)
router.get("/share/history/user/:username", getSharedHistoryByUsername)
router.get("/share/history/id/:sharingId", getSharedHistoryBySharingId)


export default router