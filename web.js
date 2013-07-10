var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');

app.use(express.favicon(__dirname + 'public/images/favicon.ico')); // include favicon

app.get('/', function(request, response) {
  // response.send('Hello World!');
	  fs.readFile('index.html', 'utf8', function (err, data) {
	  if (err) throw err;
	  response.send(data);
	});
});

/*
fs.readFile('index.html', 'utf8', function (err, data) {
  if (err) throw err;
  // out_text = buf.write(data, 0);
  //buf = new Buffer(256);
  //len = buf.write(data, 0);
  // out_text = data.toString;
  console.log(data);
  //output_text = buf.toString('utf8', 0, len); 
  //console.log(output_text);
});

*/


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
