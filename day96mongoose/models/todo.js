import mongoose from "mongoose";

// schema
const todoSchema = new mongoose.Schema({
    name: {type:String,required:true,default:"hey"},
    desc:String,
    isDone:Boolean,
    days:Number
});

export const todo = mongoose.model('todo', todoSchema);
                                                                       