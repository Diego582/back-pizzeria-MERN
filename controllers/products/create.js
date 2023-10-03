import Product from '../../models/Product.js'

export default async (req, res, next) => {
    try {
        let newProduct = await Product.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Product created',
            response: newProduct._id
        })
    } catch (error) {
        next(error)
    }
}