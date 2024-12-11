import Users from "../../Modals/Users.js";
import bcryptjs from "bcryptjs";

const registerUser = async (req, res) => {
    try {
        const { username, name, email, contact, password } = req.body;

        const lastUser = await Users.findOne().sort({ userID: -1 });
        const userID = lastUser ? lastUser.userID + 1 : 1;
        const role = "user";

        var salt = bcryptjs.genSaltSync(10);
        var hashedPassword = bcryptjs.hashSync(password, salt);

        const isExistingEmail = await Users.findOne({ email });
        if (isExistingEmail) {
            return res.status(400).json({ error: "Email Already Exist" });
        }

        const isExistingContact = await Users.findOne({ contact });
        if (isExistingContact) {
            return res.status(400).json({ error: "Contact Already Exist" });
        }

        const newUser = new Users({
            userID, username, name, email, contact, role, password: hashedPassword
        });

        const savedUser = await newUser.save();

        if (savedUser) {
            return res.status(201).json({ message: "User Saved Successfully", savedUser });
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default registerUser;
