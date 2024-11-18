import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const allUser = await User.find({ _id: { $ne: loggedInUser } }).select(
            "-password"
        );
        res.status(200).json(allUser);
    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default getUsersForSidebar;
