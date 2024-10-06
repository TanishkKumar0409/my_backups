import user from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const User = await user.find();

    return res.json(User);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const getOneUsers = async (req, res) => {
  try {
    const { id } = req.params;

    const User = await user.findOne({ id });

    if (User === null) {
      return res.json({ message: "User not Find" });
    } else {
      return res.json(User);
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const { id, name, email, phone, course } = req.body;

    const newUser = new user({
      id,
      name,
      email,
      phone,
      course,
    });

    const SavedUser = await newUser.save();

    return res.json({ message: "User Saved Successfully", SavedUser });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const DelUser = await user.findOneAndDelete({ id });

    if (DelUser === null) {
      console.log("user Not Find");
    } else {
      return res.json(DelUser);
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, course } = req.body;

    const UpdateUserDetail = await user.findOneAndUpdate(
      { id },
      { $set: { name, email, phone, course } },
      { new: true }
    );

    return res.json({ message: "User Updated Successfully", UpdateUserDetail });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
