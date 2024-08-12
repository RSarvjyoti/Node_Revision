const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const tokenBlockModel = require("../models/blockTokenModel");
require("dotenv").config();

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try{

        // Step 1 => Once you got the email there are to possibility 
        //          a>> this email is new -> correct
        //          b>> this email aready used ;

        const check = await userModel.findOne({email:req.body.email});

        if(check) {
           return res.status(400).json({message:"This email already resgister try to login"});
        }
    
        // if user already not registered 

        // we need to hash the password
        // saltRound = 5 
        // 12345 -> #q123323542 example

        bcrypt.hash(password, 5, async (err, hash) =>{
            if(err) console.log(err);

            const user = await userModel.create({username:username, email : email, password : hash});

            res.status(201).json({ meassage : "User register successfully!"});
        });

    }catch(err) {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        // first check =>  user data present in database or not
        const check = await userModel.findOne({email:req.body.email});

        if(!check) {
            return res.status(400).json({message : "This email is not registered. Try to register yourself!"});
        }
        // compare the password 
        // console.log(password, check.password)

        bcrypt.compare(password, check.password, (err, result) => {
            if(err) console.log(err);

            // after login --> will be get token
            // token --> jwt genrate the token
           
            if(result) {
                const payload = {email : check.email};
                jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                 if(err) console.log(err);
                   console.log("Token" + "=> " + token);
                   return res.status(200).json({token : token});
                });
            }else{
                res.status(400).json({message : "Information is not correct"})
            }


            });


    }catch(err) {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
}

const logoutUser = async (req, res) => {
    try{

        // How is it work => block the token
        // How to block the token => create saperate collection => tolenblocklist

        const header = req.headers.authorization;

        if(!header) {
           res.json({message : "Token header is not present"})
        }

        const token = header.split(" ")[1];

        const blockList = await tokenBlockModel.create(token);
        res.status(200).json({message : "Logout successfully!"})

    }catch(err) {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
}

module.exports = {registerUser, loginUser, logoutUser};