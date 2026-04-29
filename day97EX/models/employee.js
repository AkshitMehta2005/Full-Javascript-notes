import mongoose from "mongoose";

// schema
const employeeSchema = new mongoose.Schema({
    name: String,
    desc:String,
    isDone:Boolean,
});

export const employee = mongoose.model('employee', employeeSchema);
                                                                       