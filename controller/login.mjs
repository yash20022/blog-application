import express from "express";
import userSchema from "../models/login.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
async function login(req,res){
    try{
        const {name,email,password}=req.body;
        const user=await userSchema.findOne({name});
        if(!user){
          return res.status(401).json({"No credentials Found":err})   
        }
        const credentials=await bcrypt.compare(password,user.password);
        if(!credentials){
           return res.status(402).json({"No Credentials Matched":"Pls login first"});
        }
        const token =jwt.sign({user:user._id},"yash@init",{expiresIn:"30min"})
        console.log(token)
        res.redirect("/");
        res.status(200).json({token});


    }catch(err){
        console.log(err)
        res.status(500).send("login failed due to Server Maintainance");


    }

}
export default login;