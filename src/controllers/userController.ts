import { Request,Response } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcrypt"

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
        
      // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      console.log("user exist")
      res.status(400).json({ message: "User already exists!" });
      return;
    }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

    // new user
    const user = new userModel({ name, email,password:hashedPassword });
    await user.save();
    res.status(201).json({message:"user created", data:user});
    }
    catch(error:any){
        res.status(500).json({ message: error.message || "Server Error"})
    }
}
// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await userModel.find();  
      res.status(200).json(users);   
    } catch (error:any) {
      res.status(500).json({ message: error.message || "Server Error"});
    }
  };

//   getUserById
export const getUserById = async(req: Request, res: Response)=>{
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);

    if (!user) {
      res.status(404).json({ message: "User not found!" });
      return ;
    }
    res.status(200).json(user)
} catch(error:any){
  res.status(500).json({ message: error.message || "Server Error"});
}
};

// delete User
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      res.status(404).json({ message: "User not found!" });
      return ;
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error:any) {
    res.status(500).json({ message: error.message || "server Error" });
  }
};