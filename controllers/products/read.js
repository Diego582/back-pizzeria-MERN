import Product from '../../models/Product.js';

export default async (req, res, next) => {
    try {
        let queries = {};
        console.log(req.query.product_id, 'product_id');
        if (req.query.product_id) {
            queries._id = req.query.product_id;
        }

        const allProduct = await Product.find(queries, '-__v -createdAt -updatedAt')
            .select('price name photo category'); 

        return res.status(200).json({
            success: true,
            message: 'Products found',
            response: allProduct
        });
    } catch (error) {
        next(error);
    }
};