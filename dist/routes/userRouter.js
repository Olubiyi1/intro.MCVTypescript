"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRoute = express_1.default.Router();
userRoute.get("/", (req, res) => {
    res.send("hellow world");
});
userRoute.get("/user", userController_1.getAllUsers);
userRoute.post("/signup", userController_1.createUser);
userRoute.get("/user/:id", userController_1.getUserById);
userRoute.delete("/user/:id", userController_1.deleteUser);
exports.default = userRoute;
