const asynchandler =require("express-async-handler");
const { prependOnceListener } = require("../models/posts");
const Posts = require("../models/posts");
const User = require("../models/user");
module.exports.postcreation = asynchandler(async function (req, res){
    // console.log(req.user);
    let post = req.body.post;
    try{
        let postcreate = await Posts.create({
            user_id:req.user._id,
            post,
        });
        let posts = req.user.post;
        await User.updateOne({_id:req.user}, {post:[...posts,postcreate._id]});
        res.status(200).json({
            message:"success",
            postcreate,
            user:req.user
        })
    }catch(err)
    {
        console.log(err);
        res.status(400).json({err:err, message:"Error in craeting post"});
    }
    // res.json(req.user)
})
module.exports.getposts = asynchandler(async function (req, res){
    try{
        const posts = await Posts.find({});
        res.status(200).json({
            message:"success",
            posts,
        })
    }
    catch(err)
    {
        res.status(400).json({
            message:"failed",
        })

    }
})