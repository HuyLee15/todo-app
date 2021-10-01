const router = require('express').Router();
const todoController = require('../controllers/todoController');


router.post('/add/todo', todoController.postTodo);

module.exports = router;