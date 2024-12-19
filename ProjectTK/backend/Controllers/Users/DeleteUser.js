import Users from "../../Modals/Users.js";

const DeleteUser = async (req, res) => {
    try {
        const { username } = req.params;
        const { deletionOtp } = req.body;

        if (!deletionOtp) {
            return res.status(400).json({ message: "OTP is required" });
        }

        const isUser = await Users.findOne({ username });
        if (!isUser) {
            return res.status(404).json("User not Found")
        }
        if (isUser.deletionOtp !== parseInt(deletionOtp)) {
            return res.status(400).json("invalid Otp")
        }

        const DeletedUser = await Users.findOneAndDelete({ username });

        if (DeletedUser) {
            return res.status(200).json({ message: "Account Deleted", DeletedUser });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message });
    }
};

export default DeleteUser;