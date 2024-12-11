import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
    profile: {
        type: String,
        requried: true
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Users = mongoose.model("Users", UsersSchema)

export default Users;