import user from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const User = await user.find();

    return res.json(User);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    const newUser = new user({
      name,
      email,
      phone,
      city,
    });

    const SavedUser = await newUser.save();

    return res.json({ message: "user added Successfully", SavedUser });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
