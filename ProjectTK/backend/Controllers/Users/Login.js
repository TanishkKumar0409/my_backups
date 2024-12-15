import Users from "../../Modals/Users.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
    try {
        const PrivateKey = process.env.PrivateKey;
        const { email, password } = req.body;

        const blockedUser = await Users.findOne({ email, status: "BLOCKED" });
        if (blockedUser) {
            return res.status(403).json({ error: "Sorry, You are Blocked." });
        }

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

        const loginToken = jwt.sign({ email, password }, PrivateKey)

        const isAdmin = LoginUser.role;

        if (isAdmin === "ADMIN") {
            const adminToken = jwt.sign({ email, password, isAdmin }, PrivateKey)
            return res.status(200).json({ message: "Login Successfully", loginToken, adminToken })
        }

        if (LoginUser && isMatch && loginToken) {
            return res.status(200).json({ message: "Login Successfully", loginToken })
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default Login;