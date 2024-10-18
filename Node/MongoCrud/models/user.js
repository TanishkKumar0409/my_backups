import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  // profile: {
  //   type: String,
  // },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
