import express from "express";
import { postService } from "../services/postService.js";

export const postRouter = express.Router();

postRouter.post("/", async (req, res) => {
  const result = await postService.create();
  res.send(result);
});

postRouter.get("/:id", async (req, res) => {
  const post = await postService.getById();
  res.send({ post });
});

postRouter.get("/", async (req, res) => {
  const posts = await postService.getAll();
  res.send({ posts });
});
