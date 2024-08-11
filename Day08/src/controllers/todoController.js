const getTodos = async (req, res) => {
    try{
        res.status(200).json({message : "Get all todo"});
    }catch(err) {
        console.log(err);
    }
}

const postTodos = async (req, res) => {
    try{
        res.status(200).json({message : "Todo created successfully!"});
    }catch(err) {
        console.log(err);
    }
}

const updateTodos = async (req, res) => {
    try{
        res.status(200).json({message : "Todo updated successfully!"});
    }catch(err) {
        console.log(err);
    }
}

const deleteTodos = async (req, res) => {
    try{
        res.status(200).json({message : "Todo Deleted successfully!"});
    }catch(err) {
        console.log(err);
    }
}

module.exports = {getTodos, postTodos, updateTodos, deleteTodos};