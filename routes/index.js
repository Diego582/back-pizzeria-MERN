import express from "express";
import userRouter from "./users.js";
import productRouter from "./products.js";
import authRouter from "./auth.js";
import sliderRouter from "./sliders.js";
import reviewsRouter from "./reviews.js";
import promotionRouter from "./promotions.js";
import cartsRouter from "./carts.js";
import ordersRouter from "./orders.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/sliders", sliderRouter);
router.use("/reviews", reviewsRouter);
router.use("/promotions", promotionRouter);
router.use("/carts", cartsRouter);
router.use("/orders", ordersRouter);

export default router;
