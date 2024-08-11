const jwt = require("jsonwebtoken");
require("dotenv").config();


const auth = (req, res, next) => {
    const header = req.headers.authorization;

    if(!header) {
        res.json({message : "Token header is not present"})
    }

    const token = header.split(" ")[1];
    // console.log(token);

   const decode =  jwt.verify(token, process.env.SECRET_KEY)

   if(!decode) {
    return res.json({message : "Not vailid token"})
   }else{
    next();
   }


//    console.log(decode);

}

module.exports = auth;