const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(`<h1>`);
});

app.get("/todos", (req, res) => {
  fs.readFile("db.json", "utf-8", (err, result) => {
    if (err) console.log("we got the while reading the file");
    res.send(JSON.parse(result));
  });
});

app.post("/todos", (req, res) => {
  // console.log(req.body)
  try {
    fs.readFile("db.json", "utf-8", (err, result) => {
      if (err) console.log("we got the while reading the file");
      let data = JSON.parse(result);
      let update_todos = [...data.todos, req.body];
      let update_data = (data.todos = update_todos);

      fs.writeFile("db.json", JSON.stringify(data), (err) => {
        if (err) console.log("we got the error while creatit the file");
        else res.send("todo is added successfully");
      });
    });
  } catch (err) {
    console.log(err);
  }
});

app.patch("/todos/:id", (req, res) => {
  console.log(req.body, req.params.id);
  try {
  } catch (err) {
    console.log(err);
  }
});

app.delete("/todos/:id", (req, res) => {
  console.log(req.params.id);
  try {
  } catch (err) {
    console.log(err);
  }
});
app.listen(8080, () => {
  console.log("server is running at port no 8080");
});
