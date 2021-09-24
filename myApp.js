var express = require('express');
var app = express();

require('dotenv').config()

console.log('Hello World');
const absolutePath = __dirname + '/public'

app.use(express.static(absolutePath))
app.use('/public', express.static(absolutePath))
app.use(function (req, res, next) {
  const string = req.method + ' ' + req.path + ' - ' + req.ip
  console.log(string)
  next()
})

const serveString = app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

const jsonString = app.get('/json', (req, res, next) => {

  if (process.env.MESSAGE_STYLE == 'uppercase') {
    res.json(
      { "message": "HELLO JSON" }
    )
  } else {
    res.json(
      { "message": "Hello json" }
    )
  }
})

const newRoute = app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.send({ time: req.time })
})

const echoRoute = app.get('/:word/echo', (req, res, next) => {
  const wordParam = { echo: req.params.word }
  res.json(wordParam)
})

const nameRoute = app.get('/name', (req, res, next) => {
  const firstName = req.query.first
  const lastName = req.query.last

  const jsonString = { name: firstName + ' ' + lastName }
  console.log(jsonString)
  res.json(jsonString)
})

















module.exports = app;
