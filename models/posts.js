const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    post:
    {
        type: String,
        required: true
    },
    images:
    {
        type: String,
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comments",
        }
    ]
},{
    timestamps:true
});


const Posts = mongoose.model('Posts',postSchema);
module.exports= Posts;