import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
});

export default mongoose.model("User", userSchema);
