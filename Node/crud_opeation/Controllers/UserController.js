import User from "../Modals/User.js";

export const getUsers = async (req, res) => {
  try {
    const AllUsers = await User.find().sort({ id: 1 });
    if (AllUsers === null) {
      return res.json({ message: "Database is Empty" });
    } else {
      return res.json(AllUsers);
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const IdUsers = await User.find({ id });
    if (IdUsers === null) {
      return res.json({ message: "Database is Empty" });
    } else {
      return res.json(IdUsers);
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const addUser = async (req, res) => {
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

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, city, batch, gender } = req.body;
    const UpadatedUser = await User.findOneAndUpdate(
      { id },
      { $set: { name, email, phone, city, batch, gender } }
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

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const DeletedUser = await User.findOneAndDelete({ id });
    if (DeletedUser) {
      return res.json({ message: "User Deleted SuccessFully", DeletedUser });
    } else {
      return res.json({ message: "Does not find User" });
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};
