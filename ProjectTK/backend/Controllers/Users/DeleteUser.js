import Users from "../../Modals/Users.js";

const DeleteUser = async (req, res) => {
    try {
        const { username } = req.params;
        const { deleteOtp } = req.body;

        if (!deleteOtp) {
            return res.status(400).json({ message: "OTP is required" });
        }

        const isValidOtp = await validateOtp(username, deleteOtp);
        if (!isValidOtp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        const DeletedUser = await Users.findOneAndDelete({ username });

        if (DeletedUser) {
            return res.status(200).json({ message: "Account Deleted", DeletedUser });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default DeleteUser;