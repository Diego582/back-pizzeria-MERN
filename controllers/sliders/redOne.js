import Slider from "../../models/Slider"

export default async (req, res, next) => {
    try {
        let oneSlider = await Slider.findOne({_id:req.params._id}).select('title description paragraph product_id')
            return res.status(200).json({
                success: true,
                message: 'Slider found',
                response: oneSlider
            })
    } catch (error) {
        console.log(error )
        next(error)
    }
}