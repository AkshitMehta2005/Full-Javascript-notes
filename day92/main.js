const express = require('express')
const app = express()
const port = 3000
https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.set('view engine','ejs')
app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "search Now";
    let arr =[1,2,34]
    res.render("index",{siteName:siteName , searchText:searchText ,arr});
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "addidas when and how?";
    let blogContent = "Nice ";
    res.render()
})
app.get('/blog./:slug', (req, res) => {
  res.sendFile("/template/index.html",{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})       