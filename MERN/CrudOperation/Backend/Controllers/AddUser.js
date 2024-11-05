import User from "../Modals/User.js";

const addUser = async (req, res) => {
  try {
    const { name, email, phone, city, batch, gender } = req.body;
    const file = req.file ? req.file.filename : null;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.json({ message: "Email is Already Exist" });
    }

    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.json({ message: "Phone is Already Exist" });
    }

    const lastUser = await User.findOne().sort({ id: -1 });
    const currentId = lastUser ? lastUser.id + 1 : 1;

    const newUser = new User({
      id: currentId,
      name,
      email,
      phone,
      city,
      batch,
      gender,
      profile: file,
    });

    const SavedUser = await newUser.save();

    return res.json({
      message: "User Saved Successfully",
      SavedUser,
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export default addUser;
