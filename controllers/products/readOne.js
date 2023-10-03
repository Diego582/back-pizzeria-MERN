import Product from '../../models/Product.js'

export default async (req, res, next) => {
    try {
        let oneProduct = await Product.findOne({_id:req.params._id}).select("price name photo category")
            return res.status(200).json({
                success: true,
                message: 'product found',
                response: oneProduct
            })
    } catch (error) {
        console.log(error )
        next(error)
    }
}