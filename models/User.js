import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
export default User;
