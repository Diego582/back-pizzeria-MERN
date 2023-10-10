import express from "express";
import read from "../controllers/sliders/read.js";

const router = express.Router();

/* GET users listing. */

router.get('/', read)

export default router;
