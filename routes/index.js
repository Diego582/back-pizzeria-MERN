import express from "express";
import userRouter from "./users.js";
import productRouter from "./products.js"
import authRouter from "./auth.js"


const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter)
router.use("/auth", authRouter)


export default router;
