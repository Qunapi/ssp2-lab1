import express from "express";
import { rssService } from "../services/rssService.js";

export const rssRouter = express.Router();

rssRouter.get("/", async (req, res) => {
  const rss = await rssService.getRss();
  const rssdoc = rss.rss2();
  res.set("Content-Type", "text/xml; charset=utf-8");
  res.send(rssdoc);
});
