const { Router } = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/userController");

const userRoutes = Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);
userRoutes.delete('/logout', logoutUser);

module.exports = userRoutes;