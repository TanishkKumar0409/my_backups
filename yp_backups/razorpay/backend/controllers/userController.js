import User from "../models/User.js";

export const createOrGetUser = async (req, res) => {
  const { name, email, mobile } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, mobile });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
