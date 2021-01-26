import express from "express";
import { postService } from "../services/postService.js";

export const postRouter = express.Router();

postRouter.post("/", async (req, res) => {
  const result = await postService.create();
  res.send(result);
});

postRouter.get("/:id", async (req, res) => {
  const result = await postService.getById();
  res.send(result);
});
