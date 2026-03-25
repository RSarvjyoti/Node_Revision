const app = require("./src/app");
const connectToDB = require("./src/configs/db");
const PORT = 3000;
require("dotenv").config();

const DB_URL = process.env.DB_URL

app.listen(PORT, () => {
    connectToDB(DB_URL)
    console.log(`Server is runing at http://localhost:${PORT}`);
})