import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}))

app.use(express.json({
    limit: "16kb",
    credential: true
}))

app.use(express.urlencoded({
    limit: "16kb",              
    extended: true,
}))

app.use(cookieParser())

app.listen(process.env.PORT || 8000, ()=>{
    connectDB()
    console.log(`server is running on port ${process.env.PORT}`);
})

import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users", userRouter)