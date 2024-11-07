import User from "../Modals/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const privateKey = "tanishkKumar";

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Email not found, please create your account" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Incorrect password" });
    }

    var token = jwt.sign({ email }, privateKey);

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default login;
