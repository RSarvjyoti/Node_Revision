const app = require("./src/app");
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`);
})