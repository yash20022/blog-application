import express from "express";
import Signup from "../controller/Signup.mjs";
import login from "../controller/login.mjs";
const router=express.Router();
router.post("/auth/signup",Signup)
router.post("/auth/login",login);
export default router;