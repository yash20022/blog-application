import Blogschema from "../models/user.mjs";
import express from "express";
async function createUser(req,res){
    console.log("---------")
    console.log(req.body);
const user=new Blogschema({
    email:req.body.email,
    firstname:req.body.firstname,
    lastName:req.body.lastName,
    phone:req.body.phone,

})
try{
 await user.save();
    res.status(200).send({"message":"User created Successfully"})
}
catch(err){
    res.status(404).send("error bhoot"+err);
}}
export default createUser;