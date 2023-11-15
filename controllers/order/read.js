import Order from "../../models/Order.js";
import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {
    
    let queries = {};
    if (req.query.product_id) {
      queries._id = req.query.product_id;
    }
    if (req.query.name) {
      queries.name = new RegExp(req.query.name, "i");
    }

    if (req.query.category) {
      queries.category = req.query.category;
    }

  
    const allOrders = await Order.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select();

    return res.status(200).json({
      success: true,
      message: "Orders found",
      response: allOrders,
    });
  } catch (error) {
    next(error);
  }
};
