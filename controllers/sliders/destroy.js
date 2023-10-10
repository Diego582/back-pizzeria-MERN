import Slider from "../../models/Slider.js";

export default async (req, res, next) => {
    try {
        let deleteSlider = await Slider.findByIdAndDelete(req.params._id);
        if(deleteSlider){
            return res.status(200).json({
            success: true,
            message: "Slider delete",
            response: deleteSlider._id,
    })}else{
        return res.status(400).json({
            success: false,
            message: 'not deleted',
            response: null
        })
    };
    } catch (error) {
    next(error);
    }
}; 