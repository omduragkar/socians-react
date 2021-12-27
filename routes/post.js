const express =  require('express');
const { postcreation, getposts } = require('../controller/postcontrollers');
const route = express.Router();

const authp = require("../middlewares/jwt");
route.get("/getposts",authp, getposts )
route.post("/createpost",authp, postcreation )

// O-auth:


module.exports = route;