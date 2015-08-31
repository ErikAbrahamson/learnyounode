var concat = require('concat-stream');
var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.pipe(concat(function(data) {
    console.log(data.length);
    console.log(data.toString());
  }));
});
