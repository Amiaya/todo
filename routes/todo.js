const express = require('express')
const todoController = require('../controllers/todoController')
const router = express.Router()


router.route('/')
.post(todoController.createTodo)
.get(todoController.getAll)

router.route('/:id').patch(todoController.updateTodo).all(todoController.deleteTodo)


module.exports = router