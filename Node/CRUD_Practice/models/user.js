import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: ture,
  },
  email: {
    type: String,
    required: ture,
  },
  phone: {
    type: Number,
    required: ture,
  },
  course: {
    type: String,
    required: ture,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const user = mongoose.model("Students", UserSchema);

export default user;
