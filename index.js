//Load .env file
require('dotenv').config()
//import express
const express=require('express')
//create application using express
const ReviewServer=express()
//import Cors
const cors=require('cors')
//import Routes
const router=require('./Routes/router')
//database connection
const db=require('./DB/connection')
//use cors and express
ReviewServer.use(cors())
ReviewServer.use(express.json())
// ReviewServer.use(ApplicationMiddlewares)
ReviewServer.use(router)
//export img from backend to frontend
// ReviewServer.use('./Uploads',express.static('./Uploads'))
//define port
const PORT=3000 ||process.env.PORT
ReviewServer.listen(PORT,()=>{
    console.log("Project is running in "+PORT);
})
//To get this text in the running port this link is used in serverUrl
ReviewServer.get('/',(req,res)=>{
    res.send("Welcome to Review Server")
})
