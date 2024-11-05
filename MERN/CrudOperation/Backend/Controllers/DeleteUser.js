import User from "../Modals/User.js";

const deleteUser = async (req, res) => {
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

export default deleteUser;
