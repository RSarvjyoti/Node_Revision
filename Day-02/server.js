const http = require('http');

const server = http.createServer((req, res) =>{
    res.end("This is the base url");
})

server.listen(8080, ()=>{
    console.log(`Server is running at port http://localhost:8080`);
})