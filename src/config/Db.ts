// connects to Db
import config from "./config";
import mongoose from "mongoose";

const connectDb = async()=>{
    try{
        await mongoose.connect(config.MONGO_URL);
        console.log("connection to Db successful");
    }
    catch(error){
        console.log("failed to connect Db"); 
    }
};

export default connectDb;