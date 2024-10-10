import User from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const getData = await User.find().sort({ id: 1 });

    if (!getData) {
      return res.json({ message: "Users not found" });
    } else {
      return res.json({ getData });
    }
  } catch (error) {
    console.error({ error: error.message });
    return res.json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const getDataid = await User.find({ id }).sort({ id: 1 });

    return res.json({ getDataid });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const addUser = async (req, res) => {
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

    const SavedUser = await newUser.save().sort({ id: 1 });

    return res.json({ message: "User Saved Successfully", SavedUser });
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, phone, course, city, batch } = req.body;

    const UserUpdate = await User.findOneAndUpdate(
      { id },
      { $set: { name, email, phone, course, city, batch } },
      { new: true }
    );

    return res.json({ message: "User Updated Successfully", UserUpdate });
  } catch (error) {
    console.log({ error: error.message });
    return res.json({ message: "An error occurred", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findOneAndDelete({ id });

    return res.json({ message: "User Deleted Successfully", deletedUser });
  } catch (error) {
    console.log({ error: error.message });
  }
};
