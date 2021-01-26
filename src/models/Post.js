import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  date: Date,
  file: String,
});

export const Posts = mongoose.model("Posts", PostSchema);
