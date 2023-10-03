import User from "../../models/User.js";

export default async (req, res, next) => {
  console.log('solicito al back')
  try {
    let users = await User.find();
    return res.status(200).json({
      success: true,
      message: "user found",
      response: users,
    });
  } catch (error) {
    next(error);
  }
};