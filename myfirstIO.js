var fs = require('fs');
var data = fs.readFileSync(process.argv[2]).toString();
data = data.split('\n').length - 1;
console.log(data);
