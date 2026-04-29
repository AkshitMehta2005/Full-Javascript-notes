import express from "express";
import { employee } from "./models/employee.js";

import mongoose from "mongoose";

const conn = await mongoose.connect('mongodb://localhost:27017/employee');

const app = express();
const port = 3000;

// for name
let names = ["akshit", "anant", "anish", "daksh"];
let randomName = names[Math.floor(Math.random() * names.length)];

// for desc
let n = ["CO", "PRACTICUM", "CA", "DSA"];
let randomDesc = n[Math.floor(Math.random() * n.length)];

// for isDone
let done = () => {
  return Math.random() > 0.5;
};

let d = done();

app.get('/', (req, res) => {
    const a = new employee({ name: randomName, desc: randomDesc, isDone: d });
    a.save()
      .then(() => {
        console.log("Employee record saved successfully");
        res.send("Employee record saved successfully");
      })
      .catch((error) => {
        console.error('Error saving employee record:', error);
        res.status(500).send("Internal Server Error");
      });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
