import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { postRouter } from "./routes/postRoutes.js";
import path from "path";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use("/post", postRouter);
// app.use(express.static("public"));
app.use(express.static("."));

app.listen(5000, async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.info("Hello world");
});
