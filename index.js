
  var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file.wav");
var request = http.get("http://static1.grsites.com/archive/sounds/comic/comic002.wav", function(response) {
  response.pipe(file);
});
