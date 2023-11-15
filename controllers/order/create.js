import Product from '../../models/Product.js'
import Order from "../../models/Order.js";

export default async (req, res, next) => {
    try {
        let newOrder = await Order.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Order created',
            response: newOrder._id
        })
    } catch (error) {
        next(error)
    }
}