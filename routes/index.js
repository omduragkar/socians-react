const express =  require('express');
const route = express.Router();
// const path = require('path');
const userController = require('../controller/user');
const userRouter = require("./userRouter");

const post = require("./post");
route.use("/user", userRouter);
route.use("/posts", post);
module.exports = route;