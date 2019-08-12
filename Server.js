const express = require('express')
const app = express()
const books = require('./Database/bookdb.json')

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})

app.get('/books', (req, res) => {
  res.json(books)
})

app.post('/books', (req, res) => {
  console.log(req)
  res.status(201).json(req.body)
})
