const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    // res.setHeader({ "Content-Type": "text/html" });
    // res.end("this is a home route");
  } else if (req.url == "/todos" && req.method == "GET") {
    fs.readFile("db.json", "utf-8", (err, result) => {
      if (err) console.log("we got the while reading the file");
      res.end(result);
    });
  } else if (req.url == "/todos" && req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      fs.readFile("db.json", "utf-8", (err, result) => {
        if (err) console.log("we got the while reading the file");
        let data = JSON.parse(result);
        let update_todos = [...data.todos, JSON.parse(body)];
        let update_data = (data.todos = update_todos);

        fs.writeFile("db.json", JSON.stringify(data), (err) => {
          if (err) console.log("we got the error while creatit the file");
          else res.end("todo is added successfully");
        });
      });
    });
  } else if (req.url == "/register") {
    res.end("this is a user register route");
  } else if (req.url == "/login") {
    res.end("this is a user login route");
  } else {
    res.end("this is a invalid  route route");
  }
  // res.end is used to end the requeset and response cycle
  // res.write("this message send from the write method")
  //=>
  // res.end("hello from the server");
});

server.listen(8080, () => {
  console.log("server is runnig at  port no 8080");
});
