import Blogschema from "../models/user.mjs";
import deleteUser from "../controller/delete.mjs"
import update from "../controller/update.mjs"
import readOperation from "../controller/read.mjs"
import express from "express";
const router=express.Router();
import createUser from "../controller/create.mjs"

router.post("/",createUser);
router.delete("/:id",deleteUser);
router.put("/:id",update)
router.get("/",readOperation);
export default router;