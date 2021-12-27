const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:2
    },
    email:{
        type: String,
        required: true,
    },
    password:
    {
        type: String,
        required: true
    },
    post:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Posts",
        }
    ],
    connections:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Connections",
        }
    ],
    avatar:
    {
        type: String,
        default:"http://cdn.onlinewebfonts.com/svg/img_258083.png",
        // https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg
    },
    dob:{
        type:String
    }

}, {
    timestamps: true
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    let x =  await bcrypt.compare(enteredPassword, this.password);
    return x;
};
  
userSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
  


const User = mongoose.model('User',userSchema);
module.exports= User;