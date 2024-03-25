import mongoose from "mongoose";
import expess from "express";
const schemaLogin=mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        required:true,
        type:String
    }
})
const userSchema=mongoose.model("login",schemaLogin);
export default userSchema;