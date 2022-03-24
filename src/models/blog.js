const express=require("express");
const mongoose = require("mongoose");
const blogSchema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
label:{
    type:String,
    required:true
},
author:{
    type:String,
    required:true
},
popularity:{
    type:Number,
    required:true,
    trim:true
}

})

const BlogList=new mongoose.model("BlogList",blogSchema);
module.exports=BlogList;