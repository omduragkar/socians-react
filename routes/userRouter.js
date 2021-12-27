const express =  require('express');
const route = express.Router();


const userController = require('../controller/user');

route.post('/register', userController.createUser)
route.post('/login', userController.createSession );
route.put("/changeuserinfo", userController.updateUser);

// O-auth:


module.exports = route;