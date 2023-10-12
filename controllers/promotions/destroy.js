import Promotion from '../../models/Promotions.js';

export default async (req, res, next) => {
    try {
        const promotionId = req.params.id; 
        const deletedPromotion = await Promotion.findByIdAndDelete(promotionId);

        if (deletedPromotion) {
            return res.status(200).json({
                success: true,
                message: 'Promotion deleted',
                response: deletedPromotion._id
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Promotion not found or not deleted',
                response: null
            });
        }
    } catch (error) {
        next(error);
    }
};