import express from "express"
import userRoute from "./routes/userRouter";
import connectDb from "./config/Db";
import {errorHandler} from "./middlewares/errorHandlers"


const app = express()

// middleware
app.use(express.json());

// Db connection
connectDb()

// default route
app.use("/api",userRoute);

// using ErrorHandler middleware
app.use(errorHandler)

export default app;