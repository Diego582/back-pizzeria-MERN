import express from "express";
import userRouter from "./users.js";
import productRouter from "./products.js";
import authRouter from "./auth.js";
import slidersRouter from "./sliders.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/sliders", slidersRouter);

router.use("/auth", authRouter);

export default router;
