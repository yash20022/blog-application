import mongoose from 'mongoose';
const schema=new mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    }

    
})
const Blogschema=mongoose.model("schema12",schema);
export default Blogschema;