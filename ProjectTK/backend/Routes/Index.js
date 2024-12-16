import express from "express";
import RegisterUser from "../Controllers/Users/RegisterUser.js";
import multer from "multer"

import GetUsers from "../Controllers/Users/GetUsers.js";
import GetUserByUsername from "../Controllers/Users/GetUserByUsername.js";
import DeleteUser from "../Controllers/Users/DeleteUser.js";
import UpdateByUser from "../Controllers/Users/UpdateByUser.js";
import Login from "../Controllers/Users/Login.js";

import BlockUser from "../Controllers/Admin/BlockUser.js";
import CreateAdmin from "../Controllers/Admin/CreateAdmin.js";

import ShareFiles from "../Controllers/SharedFiles/ShareFile.js";
import GetSharedHistory from "../Controllers/SharedFiles/GetSharedHistory.js";
import GetSharedHistoryBySharingId from "../Controllers/SharedFiles/GetSharedHistoryBySharingId.js";
import GetSharedHistoryByUsername from "../Controllers/SharedFiles/GetSharedHistoryByUsername.js";
import DownloadFiles from "../Helper/DownloadFiles/DownloadFiles.js";

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
        cb(null, "Uploads/shareFiles/" + Date.now() + ".jpg")
    }
})

const UploadFileShare = multer({ storage: FileShare })

//? Users Routes
router.post("/user/register", uploadProfile.single("profile"), RegisterUser);
router.post("/user/login", Login);
router.get("/user/all", GetUsers);
router.get("/user/:username", GetUserByUsername);
router.put("/user/delete/:username", DeleteUser);
router.put("/user/update/:username", uploadProfile.single("profile"), UpdateByUser);

//? Admin Actions
router.put("/user/block/:username", BlockUser);
router.put("/user/promote/:username", CreateAdmin);

router.post("/share/:username", UploadFileShare.array("files", 10), ShareFiles);
router.get("/share/download/:sharingId", DownloadFiles);
router.get("/share/history", GetSharedHistory);
router.get("/share/history/user/:username", GetSharedHistoryByUsername);
router.get("/share/history/id/:sharingId", GetSharedHistoryBySharingId);

export default router;