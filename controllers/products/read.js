import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {
    console.log(req.query);
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
    console.log(queries, "queries");
    const allProduct = await Product.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("price name photo category");

    return res.status(200).json({
      success: true,
      message: "Products found",
      response: allProduct,
    });
  } catch (error) {
    next(error);
  }
};
