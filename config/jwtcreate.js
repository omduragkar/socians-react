const jwt = require("jsonwebtoken");

const jwtsign  = async(x)=>{
    const data={
        id:x._id
    }
    let jwtToken =  await jwt.sign(data, "sociansisthebestappforeverythingdovisitonce",{
        expiresIn:"20d"
    });
    jwtToken = "Bearer " + jwtToken;
    return jwtToken;
}

module.exports = jwtsign;