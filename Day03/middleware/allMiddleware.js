const fs = require('fs');

const demoMiddleware = (req, res, next)=>{
    console.log("This is middleware...");
    next();
}

const timeLogger = (req, res, next) =>{
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log(endTime - startTime);
}

const logger = (req, res, next) =>{
    fs.appendFile('./logs.txt', `\n${req.method} + ${req.url}`, "utf-8", (err)=>{
        if(err) console.log(err);
    });
    next();
}

const uploadeData = (req, res, next) =>{
    req.body.name = "Sarvjyoti";
    next();
} 

module.exports = {demoMiddleware, timeLogger, logger, uploadeData}