const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Shubham321:Shubham321@cluster0.qmlzk.mongodb.net/Shubham").then(()=>{
    console.log("Conn Success")
}).catch((e)=>{
    console.log(e);
})