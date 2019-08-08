
const express = require('express')
const app = express()
app.get('/', async (req, res) => {
  res.send('homehome2')
})
app.get('/about', async ( req, res) => {
  res.send('about')
})
app.listen(8080, err => {
  console.log('http://localhost:8080')
})