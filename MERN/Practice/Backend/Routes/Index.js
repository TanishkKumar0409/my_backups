import express from "express";
import addUser from "../Controllers/AddUser.js";
import GetAllUsers from "../Controllers/GetAllUsers.js";
import login from "../Controllers/login.js";

const router = express.Router();

router.post("/user/new", addUser);
router.post("/user/login", login);

router.get("/user", GetAllUsers);

export default router;
