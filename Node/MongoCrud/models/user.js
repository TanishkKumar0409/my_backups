import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
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
  course: {
    type: String,
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
  createdAt: {
    type: String,
    required: true,
  },
});

const User = mongoose.model(UserSchema);

export default User;
