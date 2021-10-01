const Todo = require('../models/Todo');
const asyncHandle = require('../middlewares/asyncHandle');

module.exports = {
    postTodo: asyncHandle(async(req, res, next) => {
        const { todo } = req.body;
        const newTodo = await Todo.create({ todo });
        res.json({
            success: true,
            data: newTodo,
        })
    })
}