const express=require ("express");
require("../src/db/conn");
const BlogList=require("../src/models/blog");

const app=express();
const port=process.env.PORT || 3000;
app.get("/",async(req,res)=>{
    res.send("hello from backend");
})
app.listen(port,()=>{
    console.log(`connection is successfull ${port}`);
})