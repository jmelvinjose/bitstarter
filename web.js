var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var data = fs.readFileSync('index.html');

var message = data.toString("utf-8")

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
