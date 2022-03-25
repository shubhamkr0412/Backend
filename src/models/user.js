const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true
    }
})
const userList=new mongoose.model("UserList",userSchema);
module.exports=userList;