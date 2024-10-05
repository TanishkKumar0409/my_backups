import user from "../models/user";

export const getUsers = async (req, res) => {
  try {
    const User = await user.find();

    return res.json(User);
  } catch (error) {
    return res.json(error);
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;

    const newUser = new user({
      name,
      email,
      phone,
      course,
    });

    const SavedUser = await newUser.save();

    return res.json({ message: "User Saved Successfully", SavedUser });
  } catch (error) {
    return res.json(error);
  }
};
