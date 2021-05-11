import { Post } from "../models/Post.js";

export class PostService {
  async create(params) {
    const { header, content, date, description, tags, img, user } = params;
    const newPost = new Post({
      header,
      content,
      date,
      description,
      tags,
      img,
      user: user._id,
    });

    return newPost.save();
  }

  getById(id) {
    return Post.findById(id).exec();
  }

  findAll(search) {
    return Post.find({ header: { $regex: search } });
  }
}

export const postService = new PostService();
