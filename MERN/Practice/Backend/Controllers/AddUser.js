import User from "../Modals/User.js";
import bcryptjs from "bcryptjs";

const addUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(password, salt);

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.json({ message: "Email already exists" });
    }

    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.json({ message: "Phone number already exists" });
    }

    const newUser = new User({
      name,
      email,
      phone,
      password: hash,
    });

    const savedUser = await newUser.save();

    return res.json({
      message: "User saved successfully",
      savedUser,
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export default addUser;
