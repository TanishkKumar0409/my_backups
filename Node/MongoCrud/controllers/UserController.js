import User from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const getData = await User.find();

    if (getData === Null) {
      return res.json({ message: "User not Find" });
    } else {
      return res.json({ getData });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id, name, email, phone, course, city, batch } = req.body;

    const newUser = User({
      id,
      name,
      email,
      phone,
      course,
      city,
      batch,
    });

    const SavedUser = await newUser.save();

    return res.json({ message: "User Saved Successfully", SavedUser });
  } catch (error) {
    console.log({ error: error.message });
  }
};
