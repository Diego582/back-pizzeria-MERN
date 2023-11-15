import Order from '../../models/Order.js'


export default async (req, res, next) => {
    try {
        let updatedOrder = await Order.findByIdAndUpdate(
            req.params._id, 
            req.body,
            {new:true}
            ).select()
            if (updatedOrder){
                return res.status(200).json({
                    success: true,
                    message: 'Order updated',
                    response: updatedOrder
                })
            }else{
                return res.status(400).json({
                    success: false,
                    message: 'not updated',
                    response: null
                })
            }
    } catch (error) {
        next(error)
    }
}