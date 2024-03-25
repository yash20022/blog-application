import express from "express";
import mongoose from "mongoose";
import Blogschema from "../models/user.mjs";
async function deleteUser(req, res) {
    const id = req.params.id; 
    console.log(id); 
    try {
        const data = await Blogschema.findByIdAndDelete(id);
        if (data) {
            res.json({ "deleted operation": "successfully" });
        } else {
            res.send("User not found or already deleted.");
        }
    } catch (error) {
        res.json({ "Error while deleting user": error });
    }
}
export default deleteUser;

