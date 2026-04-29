const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Employee = require('./models/Employee');

const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/company');



app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});

app.get('/generate', async (req, res)=>{
  // generate random data
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: "harry",
      salary: 100000,
      language: "python",
      city: "Dehradun", // Enclose the string in quotes
      isManager: true,
    });
    // await e.save() // This line is not necessary since create() already saves the document
  }
  res.render('index', { foo: 'FOO' });
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




