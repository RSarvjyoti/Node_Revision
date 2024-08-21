const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("This is a home route.");
})

app.get('/video', async (req, res) => {
    
    // get the info about the file

    const stat = fs.statSync("rbac.mp4");
    const fileSize = stat.size;
    const range = req.headers.range;
    console.log(range); // bytes=0-

    if(range) {
        const data = range.replace(/bytes=/, '').split("-");
        console.log(data); // [ '0', '' ]
        const start = parseInt(data[0]); // 0
        const end = data[1] ? parseInt(data[1]) : fileSize - 1;

        const readfileStream = fs.createReadStream("rbac.mp4", {start , end});
        // console.log(readfileStream);
        // console.log(start, end);

        const chunk = end - start + 1;

        const head = {
            "Content-Type" : "video/mp4",
            "Content-Length" : chunk,
            "Content-Range" : `bytes ${start} - ${end} / ${fileSize}`,
            "Accept-Ranges" : "bytes",
        }
        res.writeHead(200, head);
        return readfileStream.pipe(res) // pipe => To use the read and write the stream

    }

    const head = {
        "Content-Type" : "video/mp4",
        "Content-Length" : fileSize,
    }

    res.writeHead(200, head);

    return fs.createReadStream("rbac.mp4").pipe(res);

})

app.listen(8080, () => {
    console.log(`Server is runing at http://localhost:8080`);
})