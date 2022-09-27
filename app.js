import express from "express";
import dotenv from "dotenv";
import { engine } from "express-handlebars";
import adminRouter from "./routes/adminRouter.js";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.use(express.static("public"));
app.set("views", "views");
app.use("/", adminRouter);

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true }, () => {
  console.log("Database established");
});
