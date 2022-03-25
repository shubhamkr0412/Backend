const express=require ("express");
require("./db/conn");
const BlogList=require("./models/blog");
const router=require("./routers/bloglist")

const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`connection is successfull ${port}`);
})