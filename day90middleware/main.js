const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');


const index = require('./routes/index')

// ...


// 1st middleware - logger of site information
app.use((req, res, next) => {
    const currentDate = new Date().toLocaleString();
    console.log(req.headers);
    req.akshit = "I am akshit "      // ab is kisi bhi get req mai use kare sakte ho
    fs.appendFileSync('file.txt', `${currentDate} - ${req.method} \n`);
    console.log(`${currentDate} - ${req.method} ${req.method}`);
    next();
});

app.use('/index', index)

// 2nd middleware
app.use((req, res, next) => {
    console.log('2nd mw');
    req.akshit = "I am harry bhai!" // ye niche ha toh iski jada piroty ha 
    next();
});
   
app.get('/', (req, res) => {
    res.send('Hello Worldak!');
});
app.get('/home', (req, res) => {
    res.send('Hello Worldak!'+req.akshit);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
