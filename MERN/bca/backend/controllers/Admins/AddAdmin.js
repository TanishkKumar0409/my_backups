import Admin from "../../modals/Admins/Admin.js";
import bcryptjs from "bcryptjs";

const addAdmin = async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;

    const file = req.file ? req.file.filename : null;

    const lastAdmin = await Admin.findOne().sort({ id: -1 });

    const id = lastAdmin ? lastAdmin.id + 1 : 1;

    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(password, salt);

    const existingAdminByEmail = await Admin.findOne({ email });
    if (existingAdminByEmail) {
      return res
        .status(400)
        .json({ error: "Email already exists. Please use another email." });
    }

    const existingAdminByContact = await Admin.findOne({ contact });
    if (existingAdminByContact) {
      return res.status(400).json({
        error:
          "Contact number already exists. Please use another contact number.",
      });
    }

    const newAdmin = Admin({
      id: id,
      profile: file,
      name,
      email,
      contact,
      password: hash,
    });

    const savedAdmin = await newAdmin.save();

    if (savedAdmin) {
      return res.status(201).json({
        message: "User Saved Successfully",
        savedAdmin: savedAdmin,
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default addAdmin;
