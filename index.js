const express = require('express')
const app = express()
const config = require('dotenv').config();
const port = process.env.port || 3000;
const connectionDB = require('./config/mongoose');
const cors = require("cors");
connectionDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api', require('./routes/'));
app.listen(port, (err)=>{
  if(err)
  {
    console.log(err);
  }
  console.log(`Server started at ${port}`);
})