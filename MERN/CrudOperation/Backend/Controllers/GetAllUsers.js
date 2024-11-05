import User from "../Modals/User.js";

const getAllUsers = async (req, res) => {
  try {
    const AllUsers = await User.find().sort({ id: 1 });

    if (AllUsers.length === 0) {
      return res.json({ message: "Database is Empty" });
    } else {
      return res.json(AllUsers);
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export default getAllUsers;
