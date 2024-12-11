import Users from "../../Modals/Users.js";

const getUsers = async (req, res) => {
    try {
        const allUsers = await Users.find(
            { role: "user" },
            { _id: 0, role: 0, password: 0, __v: 0 }
        ).sort({ userId: 1 })

        if (allUsers) {
            return res.status(200).json(allUsers)
        } else {
            return res.status(404).json("Users Not Found")
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export default getUsers