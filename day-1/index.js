// console.log(globalThis)

// async function getData() {
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let res = await data.json();
//   console.log(res);
// }

// getData();

const os = require('os');

console.log(os.cpus());

// file system ->
const fs = require("fs");
const [, , command, ...args] = process.argv;

console.log(process.argv);

const path = require('path');

console.log(path.basename('/user/temp/test.txt'))




let commands = {

    readFolders:()=>{
    },
    help:()=>{
        console.log(`Avaliable commands
          create <name> <cotnet>  - create the file
          read <filename>         - read the file
          update <filename> <content> - upate the content
          delete <file name>    - delete the file 
          `)
    },

  create: (filename, content) => {
    fs.writeFile(filename, content, (err, result) => {
      if (err) {
        console.log("we got the error while reading the file");
      } else {
     
        console.log("file is created successfully");
      }
    });
  },

  read: (file) => {
    fs.readFile(file, (err, data) => {
      if (err) console.log("we got the error while reading the file");
      else console.log(data);
    });
  },
  delete: (filename) => {
    fs.unlink(filename, (err, result) => {
      if (err) console.log("we got the error while deleting the file");
      else console.log("file is deleted successfully");
    });
  },

  update: (filename, content) => {
    fs.appendFile(filename, content, (err, res) => {
      if (err) console.log("we got the error while updating the file");
      else console.log("file is updated successfully");
    });
  },
};

if (commands[command]) {
  commands[command](...args);
} else {
  console.log("this command not found ");
  commands.help()
}

//async method to create a file
fs.writeFile(`test${Math.random()}.txt`, "this is test file", (err, result) => {
  if (err) {
    console.log("we got the error while reading the file");
  } else {
    x+=1
    console.log("file is created successfully");
  }
});

// // //sync method to create the file

fs.writeFileSync('sync.txt',"this content is written by sync method")


// // you have to create a file -> async;

// // async -> 




