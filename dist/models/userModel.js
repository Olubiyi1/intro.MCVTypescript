"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    "name": { type: String,
        required: [true, "enter a name"]
    },
    "email": {
        type: String,
        required: [true, "enter an email"],
        unique: true
    },
    "password": {
        type: String,
        required: [true, "enter a password"]
    }
}, { timestamps: true });
const userModel = mongoose_1.default.model("UserModel", UserSchema);
exports.default = userModel;
