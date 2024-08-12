const express = require("express");
const connection = require("./src/configs/db");
const todoRouter = require("./src/routes/todoRoute");
const ensureTable = require("./src/middlewares/insureTable");
const sequelize = require("./src/configs/seqlize");

require("dotenv").config();
const app = express();

app.use(express.json());
const port = process.env.PORT || 9000;

// const db_url = process.env.DB_URL;
app.get("/", (req, res) => {
  res.send("this is a home route");
});
app.use("/todos", ensureTable, todoRouter);

app.listen(port, async () => {
  // await connectDB();
  try {
    // connection.connect((err, result) => {
    //   if (err) console.log(err);
    //   console.log("we are successfully connected to the database");
    // });
    await sequelize.authenticate();
    console.log("we aer successfully connected to the database");
    console.log(`server is running at http://localhost:${port}`);
  } catch (err) {
    console.log(err);
    console.log("we got the error while connecting to the database");
  }
});
