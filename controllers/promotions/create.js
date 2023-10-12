import Promotion from '../../models/Promotions.js';

export default async (req, res, next) => {
    try {
        let newPromotion = await Promotion.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Promotion created',
            response: newPromotion._id
        });
    } catch (error) {
        next(error);
    }
}
