const {Router} = require("express");
const connection = require("../config/mysql");

const todoRoutes = Router();

todoRoutes.get("/", (req, res) =>{
    try{
        connection.query()
        res.send("This is toto route")
    }catch(err) {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
})

todoRoutes.get("/:id", (req, res) =>{
    try{
        res.send("This is toto route")
    }catch(err) {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
})

todoRoutes.post("/", (req, res) =>{
    try{
        res.send("This is toto route")
    }catch(err) {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
})

todoRoutes.patch("/:id", (req, res) =>{
    try{
        res.send("This is toto route")
    }catch(err) {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
})

todoRoutes.delete("/:id", (req, res) =>{
    try{
        res.send("This is toto route")
    }catch(err) {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
})

module.exports = todoRoutes;