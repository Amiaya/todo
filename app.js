const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const todoRouter = require('./routes/todo')

dotenv.config()



const app = express()
app.use(express.json())

app.use('/todo', todoRouter)

const port = process.env.PORT || 6000



const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(()=> console.log('DB connection successful!'))

app.listen(port, () => {
    console.log(`App is running on port ${port}..`)
})