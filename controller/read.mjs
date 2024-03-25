import Blogschema from "../models/user.mjs"
async function readOperation(req,res){
    try{
   const user= await Blogschema.find();
   if(user){
    res.status(200).send({"message":"here are all user","data":user})}
    else{
        res.status(404).send({"message":"there are no users"})
    }

    }catch(err){
        res.json({"there is error while doing read operation":err});
    }

}
export default readOperation;