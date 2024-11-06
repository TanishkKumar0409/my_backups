import express from "express";
import addUser from "../Controllers/AddUser.js";
import GetAllUsers from "../Controllers/GetAllUsers.js";

const router = express.Router();

router.post("/user/new", addUser);

router.get("/user", GetAllUsers);

export default router;
