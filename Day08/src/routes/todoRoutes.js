const {Router} = require("express");
const { getTodos, postTodos, updateTodos, deleteTodos } = require("../controllers/todoController");


const todoRoute = Router();

todoRoute.get('/', getTodos);
todoRoute.post('/', postTodos);
todoRoute.put('/', updateTodos);
todoRoute.delete('/', deleteTodos);

module.exports = todoRoute;