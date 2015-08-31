var concat = require('concat-stream');
var http = require('http');
var results = [];
var count = 0;

function getResults() {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function streamPerURL(index) {
  http.get(process.argv[2 + index], function (response) {
    response.setEncoding('utf8');
    response.pipe(concat(function(data) {
      results[index] = data;
      count++;
      if (count === 3) {
        getResults();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  streamPerURL(i);
}
