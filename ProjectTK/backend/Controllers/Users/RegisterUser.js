import Users from "../../Modals/Users.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
    try {
        const PrivateKey = process.env.PrivateKey
        const { username, name, email, contact, password } = req.body;

        const file = req.file ? req.file.filename : "Uploads/Users/DefaultProfiles/DefaultProfiles.jpg"

        const role = "USER";
        const status = "ACTIVE"

        var salt = bcryptjs.genSaltSync(10);
        var hashedPassword = bcryptjs.hashSync(password, salt);

        const isExistingUsername = await Users.findOne({ username })
        if (isExistingUsername) {
            return res.status(400).json({ error: "Username Already Exist." })
        }

        const isExistingEmail = await Users.findOne({ email });
        if (isExistingEmail) {
            return res.status(400).json({ error: "Email Already Exist." });
        }

        const isExistingContact = await Users.findOne({ contact });
        if (isExistingContact) {
            return res.status(400).json({ error: "Contact Already Exist." });
        }

        const loginToken = jwt.sign({ username, email, contact }, PrivateKey)

        const newUser = new Users({
            profile: file,
            username,
            name,
            email,
            contact,
            status,
            role,
            password: hashedPassword
        });

        console.log(file)

        const savedUser = await newUser.save();

        if (savedUser) {
            return res.status(201).json({ message: "User Saved Successfully", savedUser, loginToken });
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default registerUser;
