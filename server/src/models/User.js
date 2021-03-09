import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    name: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("Users", UserSchema);
