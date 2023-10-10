import Slider from "../../models/Slider.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.product_id) {
      queries._id = req.query.product_id;
    }

    const allSliders = await Slider.find(queries, "-__v -createdAt -updatedAt")
      .select("title description paragraph product_id")
      .populate("product_id");

    return res.status(200).json({
      success: true,
      message: "Products found",
      response: allSliders,
    });
  } catch (error) {
    next(error);
  }
};
