import Slider from "../../models/Slider.js";

export default async (req, res, next) => {
    
    try {
        let allSliders = await Slider.find().select('title, description paragraph product_id').populate('product_id', 'price name photo  -_id')

        return res.status(200).json({
            success: true,
            message: 'sliders found',
            response: allSliders
        })
    } catch (error) {
        console.log(error)

        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}
