import Promotion from "../../models/Promotions.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.promotion_id) {
      queries._id = req.query.promotion_id;
    }

    const allPromotions = await Promotion.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("products discount detail startDate endDate");

    return res.status(200).json({
      success: true,
      message: "Promotions found",
      response: allPromotions,
    });
  } catch (error) {
    next(error); 
  }
};
