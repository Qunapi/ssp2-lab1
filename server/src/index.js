import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { postRouter } from "./routes/postRoutes.js";
import cors from "cors";
import { userRouter } from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { rssRouter } from "./routes/rssRoutes.js";

dotenv.config();
const PORT = 5000;

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/rss", rssRouter);
app.use(express.static("."));

app.listen(PORT, async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.info("Hello world, port: ", PORT);
});
