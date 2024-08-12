const express = require("express");
const connection = require("./src/config/mysql");
const todoRoutes = require("./src/routes/todoRouter");
const sequelize = require("./src/config/sequlizer");
require("dotenv").config();

const PORT = process.env.PORT || 9080

const app = express();

app.use(express.json());
app.use('/todo', todoRoutes);

app.get('/', (req, res) =>{
    res.send("Connect with mysql2");
})

app.listen(PORT, async() =>{
    try{
        await connection;
        await sequelize()
        console.log('Mysql database is connected successfully...');
        console.log('Mysql database is connected successfully...');
        console.log(`Server is connected http://localhost:${PORT}`);
    }catch(err) {
        console.log(err);
    }
})