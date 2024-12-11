import Users from "../../Modals/Users.js";

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;


        const getUser = await Users.findOne(
            { username },
            { _id: 0, role: 0, password: 0, __v: 0 })

        if (getUser) {
            return res.status(200).json(getUser)
        } else {
            return res.status(404).json("User Not Found")
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default getUserByUsername