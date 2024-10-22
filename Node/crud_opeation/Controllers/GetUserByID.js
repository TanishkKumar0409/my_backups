import User from "../Modals/User.js";

const getUsersById = async (req, res) => {
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

export default getUsersById;
