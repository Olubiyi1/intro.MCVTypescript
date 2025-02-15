import userModel, { IUser } from "../models/userModel";
import bcrypt from "bcrypt";

// Create a new user
export const createUser = async (userData: IUser) => {
  try {
    const existingUser = await userModel.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("User already exists!");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const newUser = new userModel({ ...userData, password: hashedPassword });
    return await newUser.save();
  } catch (error: any) {
    throw new Error(error.message || "Server Error");
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    return await userModel.find();
  } catch (error: any) {
    throw new Error(error.message || "Server Error");
  }
};

// Get user by ID
export const getUserById = async (id: string) => {
  try {
    const user = await userModel.findById(id);
    if (!user) throw new Error("User not found!");
    return user;
  } catch (error: any) {
    throw new Error(error.message || "Server Error");
  }
};

// Delete user
export const deleteUser = async (id: string) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) throw new Error("User not found!");
    return { message: "User deleted successfully" };
  } catch (error: any) {
    throw new Error(error.message || "Server Error");
  }
};
