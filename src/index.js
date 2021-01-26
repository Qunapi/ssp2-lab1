import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { postRouter } from "./routes/postRoutes.js";
import { postService } from "./services/postService.js";
import bodyParser from "body-parser";
import path from "path";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

dotenv.config();

const app = express();

app.set("view engine", "ejs");

const render = async (res) => {
  const posts = await postService.getAll();
  res.render("index", {
    posts,
  });
};

app.get("/", async (req, res) => {
  render(res);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", upload.single("file"), async (req, res) => {
  const { title, text, date } = req.body;
  const { file } = req;
  console.log(req.body, file);
  await postService.create({ title, text, date, file: file.path });
  render(res);
});

app.use("/post", postRouter);
app.use(express.static(path.resolve() + "/public"));

app.listen(3000, async () => {
  await mongoose.connect("mongodb://localhost/admin", {
    user: "myUserAdmin",
    pass: "abc123",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  console.log("Hello world");
});
