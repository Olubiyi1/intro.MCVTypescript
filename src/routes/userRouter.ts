import express from "express";
import {createUser,getAllUsers,getUserById,deleteUser} from "../controllers/userController"


const userRoute = express.Router()

userRoute.get("/",(req,res)=>{
    res.send("hellow world")
});

userRoute.get("/user",getAllUsers)
userRoute.post("/signup", createUser)
userRoute.get("/user/:id", getUserById)
userRoute.delete("/user/:id", deleteUser)

export default userRoute;