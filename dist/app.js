"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const Db_1 = __importDefault(require("./config/Db"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
// Db connection
(0, Db_1.default)();
// default route
app.use("/api", userRouter_1.default);
exports.default = app;
