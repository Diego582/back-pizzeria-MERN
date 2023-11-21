import Cart from "../../models/Cart.js";


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

  
    const allOrders = await Cart.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select();

    return res.status(200).json({
      success: true,
      message: "Carts found",
      response: allCarts,
    });
  } catch (error) {
    next(error);
  }
};