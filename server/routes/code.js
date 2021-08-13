import express from "express";
import { getCodes } from "../controller/code.js";

const router = express.Router();

router.get("/", getCodes);

export default router;
