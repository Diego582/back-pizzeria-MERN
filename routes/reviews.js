import express from "express";
import read from "../controllers/reviews/read.js";

const router = express.Router();
router.get('/',read)

export default router;