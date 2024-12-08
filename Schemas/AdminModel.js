import mongoose from "mongoose";

const AdminSchema=new mongoose.Schema ({
    fullname:{
        type: String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }   
});

const Admin=mongoose.model("Admin",AdminSchema);
export default Admin;