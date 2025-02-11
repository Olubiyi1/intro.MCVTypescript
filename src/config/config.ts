// loads environment files
import dotenv from "dotenv"
dotenv.config()

export default{
    port:process.env.PORT,
    MONGO_URL: process.env.MONGO_URI as string
};