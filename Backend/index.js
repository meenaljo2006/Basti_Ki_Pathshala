require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;



console.log(port);








app.use("/",(req,res)=>{
    res.send("Express Server is running");
})

app.listen(port,()=>{
    console.log("Server Started");
})