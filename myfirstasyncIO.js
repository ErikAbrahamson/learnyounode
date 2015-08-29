var fs = require('fs');
function get() {
  fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) {
      throw error;
    } else {
      data = data.toString();
      data = data.split('\n').length - 1;
      console.log(data);
    }
  });
}
get();

