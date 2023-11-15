import Order from "../../models/Order.js";

export default async (req, res, next) => {
  try {
    let deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (deletedOrder) {
      return res.status(200).json({
        success: true,
        message: "Order deleted",
        response: deletedOrder._id,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "not deleted",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
