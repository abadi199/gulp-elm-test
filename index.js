const elm = require('gulp-elm');
const through = require('through2');

function task(opts) {
  opts = opts || {};
  return through.obj((file, encoding, callback) => {
    console.log(file);
    const stream = elm(file);
    callback(null, stream);
  });
}

module.exports = task;
