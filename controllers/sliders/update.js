import Slider from "../../models/Slider.js";

export default async (req, res, next) => {
    try {
        const { _id } = req.params;
        const updatedData = req.body;

        // Validar los datos de entrada aquí si es necesario

        const updateSlider = await Slider.findByIdAndUpdate(
            _id,
            updatedData,
            { new: true }
        ).select('title description paragraph product_id');

        if (updateSlider !== null) {
            return res.status(200).json({
                success: true,
                message: 'Slider updated',
                response: updateSlider
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Slider not found',
                response: null
            });
        }
    } catch (error) {
        console.error(error); // Registrar el error para depuración o registro
        next(error);
    }
};
