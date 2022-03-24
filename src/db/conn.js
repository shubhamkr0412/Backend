const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Blogs").then(()=>{
    console.log("Conn Success")
}).catch((e)=>{
    console.log(err);
})