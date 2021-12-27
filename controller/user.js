const jwtsign = require('../config/jwtcreate');
const User = require('../models/user');

module.exports.createSession = async function(req, res)
{
    try{

        let user = await User.findOne({email:req.body.email});
        try{
            let y = await user.matchPassword(req.body.password);     
            // console.log(y);       
            if(y)
            {

                let x = await jwtsign(user._id);
                res.status(200).json({
                    message:"success",
                    token: x,
                })
            }
            else{
                res.status(403);
                res.json({
                    message:"Invalid Email or Password"
                })
            }
        }catch(err0)
        {
            console.log(err0);
            res.status(403);
            res.json({
                err0,
                message:"Invalid Email or Password"
            })
        }
    }catch(err){
        console.log(err);
        res.status(403);
        res.json({
            err,
            message:"Invalid Email or Password"
        })
    }


}

module.exports.createUser = function(req, res)
{
    if(req.body.password === req.body.confirmpassword)
    {
        
        User.findOne({email:req.body.email}, function(err, user)
        {
            if(user || err)
            {

                res.status(403);
                res.json({
                    'message': "User already Exists"
                })   
            }
            else{
                let x = req.body;
                User.create({name:x.name, email:x.email, password:x.password, dob:x.dob}, async function(err, us)
                {
                    if(err)
                    {
                        console.log(err);
                        res.status(403);
                        res.json({
                            'message': "User creation Mismatch"
                        })
                    }
                    else{
                        let token = await jwtsign(us._id);
                        console.log(token);
                        res.status(200).json({
                            message:"success",
                            token,
                        })
                    }
                });
            }
        })

    }
    else
    {
        res.status(403);
        res.json({
            'message': "Password Mismatch"
        })
        
    }

}
module.exports.updateUser = function(req, res)
{

}



// BE20F06F014
// Om@123456