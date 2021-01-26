import { Posts } from "../models/Post.js";

export class PostService {
  async create({ title = "TITLE", text = "text", date = new Date(), file }) {
    const newPost = new Posts({
      title,
      text,
      date,
      file,
    });

    return newPost.save();
  }

  getById(id = "600fedd1fe34e985aed16937") {
    return Posts.findById(id);
  }

  getAll() {
    return Posts.find();
  }
}

export const postService = new PostService();
