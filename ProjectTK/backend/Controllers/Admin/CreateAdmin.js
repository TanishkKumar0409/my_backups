import Users from "../../Modals/Users.js";

const CreateAdmin = async (req, res) => {
    try {
        const { username } = req.params;

        const newAdmin = await Users.findOneAndUpdate({ username }, { $set: { role: "ADMIN" } }, { new: true })

        if (newAdmin) {
            return res.status(200).json({ message: "User is Promoted", newAdmin })
        } else {
            return res.status(404).json({ error: "User not Found" })
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default CreateAdmin;