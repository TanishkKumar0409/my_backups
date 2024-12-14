import Users from "../../Modals/Users.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
    try {
        const PrivateKey = process.env.PrivateKey;
        const { email, password } = req.body;

        const LoginUser = await Users.findOne({ email })
        if (!LoginUser) {
            return res.status(404).json({ error: "Email Not Found" })
        }

        const isDeleted = LoginUser.status;
        if (isDeleted === "DELETED") {
            return res.status(404).json({ error: "Account Does not Exist." })
        }

        const isMatch = await bcryptjs.compare(password, LoginUser.password)
        if (!isMatch) {
            return res.status(404).json({ error: "Incorrect Password" })
        }

        const LoginToken = jwt.sign({ email, password }, PrivateKey)

        if (LoginUser && isMatch && LoginToken) {
            return res.status(200).json({ message: "Login Successfully", LoginToken })
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default Login;