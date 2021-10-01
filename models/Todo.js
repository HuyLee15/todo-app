const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'todo is invalid'],
    },
})

module.exports = new mongoose.model('Todo', TodoSchema);