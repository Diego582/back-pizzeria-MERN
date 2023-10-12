import Promotion from '../../models/Promotions.js';

export default async (req, res, next) => {
    try {
        const promotionId = req.params._id; 
        const onePromotion = await Promotion.findOne({ _id: promotionId }).select("price name photo category startDate endDate");
        
        if (onePromotion) {
            return res.status(200).json({
                success: true,
                message: 'Promotion found',
                response: onePromotion
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Promotion not found',
                response: null
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};