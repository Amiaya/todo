const Todo = require('../models/todo')


exports.getAll = async (req, res) => {
    try {
        const todo = await Todo.find()
        res.status(200).json({
            status: "successful",
            data: {
                todo
            }
        })
        
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
        
    }
}

exports.createTodo = async (req,res) => {
    try {
        const todo = await Todo.create(req.body)
        res.status(200).json({
            status: "successful",
            data: {
                todo
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
        
    }
}

exports.updateTodo = async(req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "successful",
            data: {
                todo
            }
        })
        
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}

exports.deleteTodo = async(req, res) => {
    try {
        res.status(204).json()
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
    const todo = await Todo.findByIdAndDelete(req.params.id)

}