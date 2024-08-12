const { Router } = require("express");
const connection = require("../configs/db");

const todoRouter = Router();

todoRouter.get("/", async (req, res) => {
  try {
    connection.query("select * from todos", (err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

todoRouter.post("/", async (req, res) => {
  try {
    const query = `INSERT INTO todos(title) VALUES(?)`;
    connection.query(query, [req.body.title], (err, result) => {
      if (err) console.log(err);
      res.status(201).json({ message: "todo is created successfully" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

todoRouter.patch("/:id", async (req, res) => {
  // what if user want's to update the title as well
  // title = ?
  // status = ?

  try {
    let data = [];
    console.log(req.body);

    let query = `UPDATE todos SET`;

    if (req.body.status != "undfined") {
      query += ` status = ?`;
      data.push(req.body.status);
    }
    if (req.body.status != "undfined" && req.body.title) {
      query += `, title = ?`;
      data.push(req.body.title);
    }
    if (req.body.status == "undfined" && req.body.title) {
      query += ` title = ?`;
      data.push(req.body.title);
    }
    query += ` WHERE id = ?`;
    data.push(+req.params.id);

    console.log("updated query", query, data);
    connection.query(query, data, (err, result) => {
      if (err) console.log(err);
      else {
        res.status(200).json({ message: "todo is updated successfully" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

todoRouter.delete("/:id", async (req, res) => {
  try {
    let query = `DELETE FROM  todos WHERE id = ?`;
    connection.query(query, [req.params.id], (err, result) => {
      if (err) console.log(err);
      else {
        res.status(200).json({ message: "todo is delete successfully" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

module.exports = todoRouter;
