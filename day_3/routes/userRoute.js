const { Router } = require("express");

const userRouter = Router();

// that we called as router level

userRouter.get("/", (req, res) => {
  res.send("this is  USER get route");
});

userRouter.post("/", (req, res) => {
  res.send("this is  USER post route");
});

userRouter.patch("/:id", (req, res) => {
  res.send("this is  USER patch route");
});

userRouter.delete("/:id", (req, res) => {
  res.send("this is  USER delete route");
});

module.exports = userRouter;
