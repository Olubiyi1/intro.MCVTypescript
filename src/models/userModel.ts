import mongoose,{Schema,Document} from "mongoose";

export interface IUser extends Document {
    name:string,
    email:string,
    password:string
}

const UserSchema:Schema = new mongoose.Schema(
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
const userModel = mongoose.model<IUser>("UserModel",UserSchema)

export default userModel;
