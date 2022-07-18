const Todo = require('../models/todo')
const sendEmail = require('../utils/email')

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
        console.log(err)
        res.status(400).json({
            status: "failed",
        })
        
    }
}

exports.createTodo = async (req,res) => {
    try {
        const todo = await Todo.create(req.body)
        const URL = `${req.protocol}://${req.get('host')}/todo/${todo._id}`
        const message = `Your TODO list have be created, to confirm click on this link: ${URL}`
        await sendEmail({
            email: req.body.email,
            subject: 'Check if the todo list was created',
            message
        })
        res.status(200).json({
            status: "successful",
            data: {
                todo
            },
            message: 'Check your email to confirm that the list have been created'
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: "failed",
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
        console.log(err)
        res.status(400).json({
            status: "failed",
        })
    }
}

exports.deleteTodo = async(req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.status(204).json()
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: "failed"
        })
    }
  

}