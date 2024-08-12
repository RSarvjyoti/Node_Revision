const {Router} = require("express");
const { getTodos, postTodos, updateTodos, deleteTodos } = require("../controllers/todoController");
const auth = require("../middlewares/auth");


const todoRoute = Router();

todoRoute.get('/', auth, getTodos);
todoRoute.post('/', postTodos);
todoRoute.put('/', updateTodos);
todoRoute.delete('/', deleteTodos);

module.exports = todoRoute;