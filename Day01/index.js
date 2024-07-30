const {add, sub, mul, div} = require('./data.js');
const fs = require('fs');
const os = require('os');
const path = require('path');


console.log(add(2,3));

console.log(sub(2,3));

console.log(mul(2,3));

console.log(div(2,3));

// ************ fs ************

// Create the file and wirte the content also
fs.writeFile('text.txt', "This is the content of the file!", (err, res)=>{
    if(err){
        console.log(err);
    }
});

// read the file
fs.readFile('./text.txt', {encoding: "utf-8"}, (err, data) =>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

// 

fs.appendFile('./log.txt', '\nThis is me third time wrinting in the file\n', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data is appended!");
    }
})

// ********** OS ***************

const cpu = os.cpus();
console.log(cpu);

const userInfo = os.userInfo();
console.log(userInfo);

const platform = os.platform();
console.log(platform); // win32


// ************* path ************

const pathfile = path.dirname('./text.txt') // .
console.log(pathfile);

const extentionOfFile = path.extname('./text.txt');

console.log(extentionOfFile); // .txt


