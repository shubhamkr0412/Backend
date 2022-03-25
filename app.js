const express=require ("express");
require("./src/db/conn");
const BlogList=require("./src/models/blog");
const router=require("./src/routers/bloglist")

const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`connection is successfull ${port}`);
})