const express = require("express");
const app = express();
const mongoose = require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/YelpCamp");
        console.log("connected to database");
    }catch(e){
        console.log("Failed To Connect To Database");
    }
}

connectDB();

app.get("/", (req, res) => {
    res.send("Welcome");
})

app.listen(5000, (req, res) => {
    console.log("We are listening on Port 5000");
})