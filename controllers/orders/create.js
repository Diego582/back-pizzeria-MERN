import Product from "../../models/Product.js";
import Order from "../../models/Order.js";

export default async (req, res, next) => {
  try {
    let order = req.body;

    let product = await Product.findById(req.body.prod);
    if (product) {
      order.prod = product;
    }
    let newOrder = await Order.create(order);
    return res.status(201).json({
      success: true,
      message: "Order created",
      response: newOrder._id,
    });
  } catch (error) {
    next(error);
  }
};
