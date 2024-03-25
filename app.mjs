import express from "express";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken"
const __dirname = path.dirname(new URL(import.meta.url).pathname);
import bcrypt from "bcrypt"
import bodyParser from "body-parser";
const app = express();
import router from "./routes/SignupRoutes.mjs";
import path from "path";
import staticRoutes from "./routes/staticRoutes.mjs";
import routes from "./routes/blogroutes.mjs"
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth",staticRoutes)
app.use("/",router);
app.use("/user",routes);
app.use(bodyParser.urlencoded({ extended: true }));


const PORT=8000;
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
mongoose.connect("mongodb://0,0,0,0:27017/todoList").then(console.log("database connected successfully"));
app.listen(PORT,()=>{
    console.log(`app is listening on port, ${PORT}`)} )

