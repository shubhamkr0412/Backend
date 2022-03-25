const express=require ("express");
require("../src/db/conn");
const BlogList=require("../src/models/blog");

const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());
app.post("/blogs",async(req,res)=>{
   try{
       const addingNewblog=new BlogList(req.body);
       console.log(req.body);
        const insertBlog=await addingNewblog.save();
        res.status(201).send(insertBlog);

   }catch(e){
       res.status(400).send(e);
   }
})
app.get("/blogs",async(req,res)=>{
    try{
        const getBlog=await BlogList.find({}).sort({"popularity":1});
         res.send(getBlog);
 
    }catch(e){
        res.status(400).send(e);
    }
 })
 app.get("/blogs/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getBlog1=await BlogList.findById({_id});
         res.send(getBlog1);
 
    }catch(e){
        res.status(400).send(e);
    }
 })
 app.patch("/blogs/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getBlog1=await BlogList.findByIdAndUpdate(_id,req.body);
  
         res.send(getBlog1);
 
    }catch(e){
        res.status(500).send(e);
    }
 })
 app.delete("/blogs/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getBlog1=await BlogList.findByIdAndDelete(_id,req.body);
  
         res.send(getBlog1);
 
    }catch(e){
        res.status(500).send(e);
    }
 })
app.listen(port,()=>{
    console.log(`connection is successfull ${port}`);
})