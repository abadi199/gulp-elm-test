const gutil = require('gulp-util')
const through = require('through2');
const spawn = require('cross-spawn-async');
const Q = require('q');
const argv = require('minimist')(process.argv.slice(2));
const PLUGIN = 'gulp-elm-test';

/**
 * Install all dependencies with --yes options.
 */
function init() {
  const deferred = Q.defer();
  const proc = spawn('elm-make', ['--yes']);
  var bStderr = new Buffer(0);

  proc.stderr.on('data', (stderr) => {
    if (argv.verbose) {
      console.log(`${stderr}`);
    }
    bStderr = Buffer.concat([bStderr, new Buffer(stderr)]);
  });

  proc.on('close', (code) => {
    if (code > 0) {
      deferred.reject(new gutil.PluginError(PLUGIN, bStderr.toString()));
    } else {
      deferred.resolve();
    }
  })

  return deferred.promise;
}

function filename(file) {
  return file.path.replace(file.base, '');
}

/**
 * Run the test file
 * @param {string} file - Elm test file.
 */
function runTest(file) {
  console.log(`Running test ${filename(file)} ...`);

  const deferred = Q.defer();
  const proc = spawn('elm-test', [file.path]);
  var bStderr = new Buffer(0);
  var bStdout = new Buffer(0);

  proc.stderr.on('data', (stderr) => {
    if (argv.verbose) {
      console.log(`${stderr}`);
    }
    bStderr = Buffer.concat([bStderr, new Buffer(stderr)]);
  });

  proc.stdout.on('data', (data) => {
    if (argv.verbose) {
      console.log(`${data}`);
    }
    bStdout = Buffer.concat([bStdout, new Buffer(data)]);
  });

  proc.on('close', (code) => {
    if (argv.verbose) {
      console.log(`exit with code ${code}`);
    }
    if (code > 0) {
      deferred.reject(new gutil.PluginError(PLUGIN, "failed test"));
    } else {
      deferred.resolve(bStdout.toString());
    }
  });

  return deferred.promise;
}

/**
 * gulp task
 */
function task() {
  const errors = [];
  return through.obj((file, encoding, callback) => {
    init()
      .then(() => runTest(file))
      .then((output) => {
        console.log(`succeed test: ${filename(file)}`);
        callback(null, output)
      })
      .catch((error) => {
        const errorMessage = `${error.message}: ${filename(file)}`;
        errors.push(errorMessage);
        console.log(errorMessage);
        callback(); // delay errors until all test ran.
      });
  }).on('end', function end() {
    if (errors.length > 0) {
      this.emit('error', new gutil.PluginError('gulp-mocha', errors.join('\n'), {
        showStack: (argv.verbose) ? true : false
      }));
    }
  });
}

module.exports = task;
module.exports.init = init;
