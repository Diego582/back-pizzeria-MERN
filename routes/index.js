import express from "express";
import userRouter from "./users.js";
import productRouter from "./products.js"

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter)

export default router;
