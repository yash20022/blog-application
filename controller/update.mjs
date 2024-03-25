import express from "express";
import Blogschema from "../models/user.mjs";
async function update(req, res) {
    const id = req.params.id;
   await Blogschema.findByIdAndUpdate(id, req.body)
        .then(() => {
            console.log("Data updated successfully");
            res.status(200).json({ "message": "Data updated successfully" });
        })
        .catch(err => {
            console.log("There is an error while updating user information:", err);
            res.status(500).json({ "error": "Error updating user information" });
        });
}
export default update;
