import { Response, Request, NextFunction } from "express";


export  const errorHandler = (err: any, req:Request, res:Response, next: NextFunction)=>{
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message,
      });
}