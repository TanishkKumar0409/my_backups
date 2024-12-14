import Users from "../../Modals/Users.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        const PrivateKey = process.env.PrivateKey;
        const { username, name, email, contact, password } = req.body;

        const file = req.file ? req.file.filename : "Uploads/Users/DefaultProfiles/DefaultProfiles.jpg";

        const role = "USER";
        const status = "ACTIVE";

        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        const loginToken = jwt.sign({ username, email, contact }, PrivateKey);

        if (!username || !name || !email || !contact || !password) {
            return res.status().json({ error: "All Fields are Required" })
        }

        const blockedUser = await Users.findOne({ $or: [{ email }, { contact }], status: "BLOCKED" });
        if (blockedUser) {
            return res.status(403).json({ error: "Sorry, You are Blocked." });
        }

        const ReActivating = await Users.findOneAndUpdate(
            { $or: [{ email }, { contact }], status: "DELETED" },
            {
                $set: {
                    profile: file,
                    username,
                    name,
                    email,
                    contact,
                    status,
                    role,
                    password: hashedPassword,
                },
            },
            { new: true }
        );

        if (ReActivating) {
            return res.status(200).json({ message: "Account Reactivated Successfully", ReActivating, loginToken });
        }

        const isExistingUsername = await Users.findOne({ username });
        if (isExistingUsername) {
            return res.status(409).json({ error: "Username Already Exists." });
        }

        const isExistingEmail = await Users.findOne({ email });
        if (isExistingEmail) {
            return res.status(409).json({ error: "Email Already Exists." });
        }

        const isExistingContact = await Users.findOne({ contact });
        if (isExistingContact) {
            return res.status(409).json({ error: "Contact Already Exists." });
        }

        const newUser = new Users({
            profile: file,
            username,
            name,
            email,
            contact,
            status,
            role,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        if (savedUser) {
            return res.status(201).json({ message: "User Registered Successfully", savedUser, loginToken });
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default registerUser;
