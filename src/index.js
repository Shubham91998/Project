//require('dotenv').config({path:'./env'});

import express from "express";
import dotenv from "dotenv";

import connectDB from "./db/index.js";


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







/*
import express from "express";
const app = express();


( async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {console.log("ERROR: ",error);
            throw error
        })


        app.listen(process.env.PORT, () => {
            console.log(`App is listning on port ${process.env.PORT}`)
        })

    }catch(error){
        console.log("ERROR: ", error)
        throw err
    }
})()
*/
