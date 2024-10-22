import User from "../Modals/User.js";

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, phone, city, batch, gender } = req.body;

    const file = req.file ? req.file.filename : null;

    const UpadatedUser = await User.findOneAndUpdate(
      { id },

      { $set: { profile: file, name, email, phone, city, batch, gender } }
    );

    if (UpadatedUser) {
      return res.json({ message: "User Updated Successfull", UpadatedUser });
    } else {
      return res.json({ message: "Does not find User" });
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export default updateUser;
