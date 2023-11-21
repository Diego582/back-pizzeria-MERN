import Order from '../../models/Order.js'


export default async (req, res, next) => {
    try {
        let oneOrder = await Order.findOne({_id:req.params._id}).select()
            return res.status(200).json({
                success: true,
                message: 'Order found',
                response: oneOrder
            })
    } catch (error) {
        console.log(error )
        next(error)
    }
}