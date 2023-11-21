import Product from "../../models/Product.js";
import Cart from "../../models/Cart.js";

export default async (req, res, next) => {
  try {
    let newOrder = await Cart.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Cart created",
      response: newOrder._id,
    });
  } catch (error) {
    next(error);
  }
};
