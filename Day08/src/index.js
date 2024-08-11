const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const todoRoute = require("./routes/todoRoutes");
const auth = require("./middlewares/auth");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 9000
const DB_URL = process.env.DB_URL

app.use('/user', userRoutes);
app.use('/todo', auth, todoRoute);
app.use(express.static("public"));

app.get('/', (req, res) =>{
    res.send("Home route")
})

app.listen(PORT, async () =>{
    try {
        await connectDB(DB_URL);
        console.log(`Server is runnig http://localhost:${PORT}`);
        console.log("Database connected successfully")
    } catch(err) {
        console.log(err);
    }
})