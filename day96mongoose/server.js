import mongoose from "mongoose"
import express  from "express"
import { todo } from "./models/todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const Todo = new todo({desc:"Intro to mongoose",isDone:false,days:1})
  Todo.save();
  res.send("Hello world");
})
   
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 


