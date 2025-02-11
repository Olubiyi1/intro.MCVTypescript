import express from "express"
import userRoute from "./routes/userRouter";
import connectDb from "./config/Db";


const app = express()

// middleware
app.use(express.json());

// Db connection
connectDb()

// default route
app.use("/api",userRoute);

export default app;