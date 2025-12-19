require('dotenv').config()
const { data } = require('./posts')
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res) => {
  res.json(data)
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <a href="https://www.youtube.com">YouTube.com</a>
  `)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
