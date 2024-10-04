import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();
        return res.json(user);
    } catch (error) {
        return res.json({ error: error.message });
    }
};

export const addUser = async (req, res) => {
    try {
        const { name, email, phone, city } = req.body;

        const newUser = new User({
            name,
            email,
            phone,
            city
        })

        const savedUser = await newUser.save();
        return res.json({ message: "User added successfully.", savedUser });
    } catch (error) {
        return res.json({ error: error.message });
    }
};