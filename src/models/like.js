const { default: mongoose } = require("mongoose");

const likeSchema=new mongoose.Schema({
    userid:{
       type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    postid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }
})
const LikeList=new mongoose.model("LikeList",likeSchema);
module.exports=LikeList;