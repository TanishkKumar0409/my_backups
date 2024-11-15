import express from "express";
import { addTransaction, getAllTransaction } from "../Controllers/Controllers.js";

const router = express.Router();

router.post("/new", addTransaction);

router.get("/get",getAllTransaction)

export default router;
