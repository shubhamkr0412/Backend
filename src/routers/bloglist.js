const express = require("express");

const router= new express.Router();

const BlogList=require("../models/blog");
router.post("/blogs",async(req,res)=>{
    console.log("request=",req.body);
    try{
        const addingNewblog=new BlogList(req.body);
        console.log(req.body);
         const insertBlog=await addingNewblog.save();
         res.status(201).send(insertBlog);
 
    }catch(e){
        res.status(400).send(e);
    }
 })
 router.get("/blogs",async(req,res)=>{
     try{
         const getBlog=await BlogList.find({}).sort({"popularity":1});
          res.send(getBlog);
  
     }catch(e){
         res.status(400).send(e);
     }
  })
  router.get("/blogs/:id",async(req,res)=>{
     try{
         const _id=req.params.id;
         const getBlog1=await BlogList.findById({_id});
          res.send(getBlog1);
  
     }catch(e){
         res.status(400).send(e);
     }
  })
  router.patch("/blogs/:id",async(req,res)=>{
     try{
         const _id=req.params.id;
         const getBlog1=await BlogList.findByIdAndUpdate(_id,req.body);
   
          res.send(getBlog1);
  
     }catch(e){
         res.status(500).send(e);
     }
  })
  router.get("/blogs/title/:title",async(req,res)=>{
    try{
        
        const getBlog1=await BlogList.find({title:req.params.title});
  
         res.send(getBlog1);
 
    }catch(e){
        res.status(500).send(e);
    }
 })
  router.delete("/blogs/:id",async(req,res)=>{
     try{
         const _id=req.params.id;
         const getBlog1=await BlogList.findByIdAndDelete(_id,req.body);
   
          res.send(getBlog1);
  
     }catch(e){
         res.status(500).send(e);
     }
  })
  module.exports=router;