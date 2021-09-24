var express = require('express');
var app = express();
require('dotenv').config()


console.log('Hello World');
const absolutePath = __dirname + '/public'


const serveString = app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})


app.use(express.static(absolutePath))
app.use('/public', express.static(absolutePath))

app.get('/json', (req, res) => {
  console.log(process.env.MESSAGE_STYLE, '<= message style')
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
