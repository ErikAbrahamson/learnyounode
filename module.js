var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extName, callback) {
  fs.readdir(dirName, function (err, list) {
    list = list.filter(function (file) {
      return path.extname(file) === '.' + extName;
    });
    callback(null, list);
  });
};
