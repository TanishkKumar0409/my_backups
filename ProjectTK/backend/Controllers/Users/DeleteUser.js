import Users from "../../Modals/Users.js";

const DeleteUser = async (req, res) => {
    try {
        const { username } = req.params;

        const DeletedUser = await Users.findOneAndDelete({ username })

        if (DeletedUser) {
            return res.status(200).json({ message: "Account Deleted", DeletedUser })
        } else {
            return res.status(404).json("User not Found")
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export default DeleteUser;