const express = require('express')
const app = express()
const blog = require('./routes/blog')

const port = 3000

app.use('/blog', blog)
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World! getrequest')
})

app.post('/', (req, res) => {
  res.send('Hello World! getpost')
})
// put req update karne ke kam ata hai
app.put('/', (req, res) => {
  res.send('Hello World! getput')
})

// res.sendfile html serveing karta hai
// app.get('/dummy', (req, res) => {
//   console.log("done!");
//   res.sendfile('templates/dummy.html',{root:__dirname})
// })

app.get('/api', (req, res) => {
  res.json({'a':1,'b':2})
})
// donload ho jati hai file
app.get('/dummy', (req, res) => {
  res.download('templates/dummy.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})