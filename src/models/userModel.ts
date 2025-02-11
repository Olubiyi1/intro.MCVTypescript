import mongoose from "mongoose";

const UserSchema= new mongoose.Schema(
    {
    "name":{type:String,
        required:[true,"enter a name"]
    },
    "email":{
        type:String,
        required:[true,"enter an email"],
        unique:true,
        lowercase:true
    },
    "password":{
        type:String,
        required:[true, "enter a password"]
    }
},
{timestamps:true}
)
const userModel = mongoose.model("UserModel",UserSchema)

export default userModel;
