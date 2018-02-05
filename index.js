var express = require('express');
var path = require("path");

var app = express();
var http = require('http').Server(app);

var PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

http.listen(PORT, () => {
  console.log('listening', PORT);
});

/* setInterval(() => io.emit('time', new Date().toTimeString()), 1000); */
