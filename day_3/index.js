const express = require("express");
const userRouter = require("./routes/userRoute");
const multer = require("multer");
const morgan = require("morgan");
const fs = require('fs')
const path = require('path')

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static("public"));
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(
  morgan(
    ":http-version :url  :method :status :total-time[digits] :user-agent",
    { stream: accessLogStream }
  )
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {


    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//if user is sending or uploading a file we have decided at which we have to put them

// app -> express .use()
//routing part

//methods
// get post patch /put delete
// app.Methos(route,middleware,   handler)

//middleware chaing

const logger = (req, res, next) => {
  console.log(`Method - ${req.method} & url ${req.url}`);
  res.send("this is handled by the middleware ");
  next();
};

// const middleware2 = (req, res, next) => {
//   console.log("inside the middleware2");
//   next();
// };
const validation = (req, res, next) => {
  console.log(req.body);
  //we are checking that each user should have - email,password , username
  // if (!req.body.email || !req.body.password || !req.body.username) {
  //   res.send("your body is not correct & your data is not correct");
  // }else{
  //   next()
  // }
  const username = req.body.email.split("@")[0];
  req.body.username = username;

  if (!req.body.email || !req.body.password || !req.body.username) {
    res.send("your body is not correct & your data is not correct");
  } else {
    next();
  }
};

app.get("/", logger, (req, res) => {
  res.send("this is a home route");
});
// app.use("/user", userRouter);

app.post("/register", upload.array("avatar", 5), (req, res) => {
  res.send("user file is upload successfully");
});

app.listen(port || 9090, () => {
  console.log(`server is running at http://localhost:${port}`);
});

//user can upload single & multiple as well
