import Slider from "../../models/Slider.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.description) {
      queries.description = new RegExp("^" + req.query.description, "i");
    }
   
    let allSliders = await Slider.find(
      queries,
      "title, description paragraph product_id"
    )
      .select("title, description paragraph product_id")
      .populate("product_id", "price name photo  -_id");
    return res.status(200).json({
      success: true,
      message: "sliders found",
      response: allSliders,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      message: "not found",
      response: null,
    });
  }
};
