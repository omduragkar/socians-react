const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    post_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts",
        required:true
    },
    images:
    {
        type: String,
    },
    comment:{
        type:String,
        required: true
    }
},{
    timestamps:true
});


const Comments = mongoose.model('Comments',commentSchema);
module.exports= Comments;