import Slider from '../../models/Slider.js'
//import slider from '../../models/Slider.js'

export default async (req, res, next) => {
    try {
        let newSlider = await Slider.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Slider created',
            response: newSlider._id
        })
    } catch (error) {
        next(error)
    }
}