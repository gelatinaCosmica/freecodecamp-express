var express = require('express');
var app = express();
require('dotenv').config()


console.log('Hello World');
const absolutePath = __dirname + '/public'


app.use(function (req, res, next) {
  const string = req.method + ' ' + req.path + ' - ' + req.ip
  console.log(string)
  next()
})

const serveString = app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})


app.use(express.static(absolutePath))
app.use('/public', express.static(absolutePath))



app.get('/json', (req, res, next) => {

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




















module.exports = app;
