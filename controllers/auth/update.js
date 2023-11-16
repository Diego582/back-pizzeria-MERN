import User from "../../models/User.js";
import bcrypt from "bcrypt";

export default async (req, res, next) => {
    try {
        const userId = req.params._id; 
        const { mail, password } = req.body;

        const userToUpdate = await User.findById(userId);
        if (!userToUpdate) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
                response: null
            });
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            userToUpdate.password = hashedPassword;
        }

        if (mail) {
            userToUpdate.mail = mail;
        }

        const updatedUser = await userToUpdate.save();

        return res.status(200).json({
            success: true,
            message: 'User updated',
            response: updatedUser
        });

    } catch (error) {
        next(error);
    }
};
