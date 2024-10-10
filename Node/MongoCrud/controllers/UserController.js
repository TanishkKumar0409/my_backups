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
    const { id } = req.params;

    const getIdData = await User.find({ id });

    if (getData === Null) {
      return res.json({ message: "User not Find" });
    } else {
      return res.json({ getIdData });
    }
  } catch (error) {
    console.log({ error: error.message });
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

    const SavedUser = await newUser.save();

    return res.json({ message: "User Saved Successfully", SavedUser });
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const { id, name, email, phone, course, city, batch } = req.body;

    const CurrentUser = User({
      id,
      name,
      email,
      phone,
      course,
      city,
      batch,
    });

    const UserUpdate = await User.findOneAndUpdate(
      { id },
      { $set: CurrentUser }
    );

    return res.json({ message: "User Updated Successfully", UserUpdate });
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findOneAndDelete({ id });

    return res.json({ message: "User Deleted Successfully", deleteUser });
  } catch (error) {
    console.log({ error: error.message });
  }
};
