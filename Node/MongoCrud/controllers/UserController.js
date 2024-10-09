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
