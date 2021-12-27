const mongoose =  require('mongoose');
const connectionDB =async function(){

    try{
        let url = process.env.db_host +"/"+process.env.dbName;
        let connectionreq = await mongoose.connect(url);
        console.log(`MongoDB connected at ${connectionreq.connection.host}`);
    }catch(err)
    {
        console.log(err);
        console.log(`MongoDB not connected. Unsuccessful Request!`);
    }
} 
module.exports = connectionDB;