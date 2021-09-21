var express = require('express');
var app = express();



console.log('Hello World');
// const absolutePath = __dirname + /views/index.html

const serveString = app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})































module.exports = app;
