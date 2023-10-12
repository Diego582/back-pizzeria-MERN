import Promotion from '../../models/Promotions.js';

export default async (req, res, next) => {
    try {
        const promotionId = req.params._id; 
        const updatedPromotion = await Promotion.findByIdAndUpdate(
            promotionId,
            req.body,
            { new: true }
        ).select('price name photo category startDate endDate');

        if (updatedPromotion) {
            return res.status(200).json({
                success: true,
                message: 'Promotion updated',
                response: updatedPromotion
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Promotion not found or not updated',
                response: null
            });
        }
    } catch (error) {
        next(error);
    }
};
