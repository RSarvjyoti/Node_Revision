const express = require("express");
const userRouter = require("./routes/userRoute");
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 9080

app.use(express.json());
app.use(express.static("public"));
app.use('/users', userRouter);

app.get('/', (req, res) =>{
    res.send("This is demo of cloudinary!")
})

app.listen(PORT, () =>{
    console.log(`Server is running at port http://localhost:${PORT}`);
})