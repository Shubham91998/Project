

import express from "express";
import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



dotenv.config({
    path: './env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        `Server is running at : ${process.env.PORT}`
    })
})
.catch((err) => {
    console.log("Mongodb connection failef !!! ", err)
})


