const express = require("express");
const multer  = require('multer');
const morgan = require('morgan');
const cors = require('cors');
const { demoMiddleware, timeLogger, logger } = require("./middleware/allMiddleware");
const path = require("path");


require("dotenv").config();
const PORT = process.env.PORT || 9080
const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

app.use(express.json());

// Use Morgan middleware
app.use(morgan('dev')); // POST /profile 200 39.944 ms - 26
// Basic usage (allow all origins)
app.use(cors());

app.get('/', demoMiddleware, (req, res) =>{
    res.send("This is home page!");
})

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is CORS-enabled for all origins!' });
  });

//  This route I have called 2 middleware

app.get('/about',timeLogger, logger, (req, res) =>{ 
    res.send(`<h1>Hello I'm Sarvjyoti</h1>`);
})

app.post('/data', (req, res) =>{
    console.log(req.body);
    res.send("Data uploaded successfully...");
})


// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // File name with timestamp
  }
});

// Initialize Multer with the configured storage engine
const upload = multer({ storage: storage });

// Define the POST route for uploading profile/avatar
app.post('/profile', upload.single('avatar'), (req, res) => {
    res.send('File uploaded successfully');
  });

app.listen(PORT, () =>{
    console.log(`Server is running at port http://localhost:${PORT}`);
})
