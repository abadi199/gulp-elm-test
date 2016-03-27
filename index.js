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
    if (argv.verbose) { console.log(`${stderr}`); }
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

/**
 * Run the test file
 * @param {string} file - Elm test file.
 */
function runTest(file) {
  const deferred = Q.defer();
  const proc = spawn('elm-test', [file.path]);
  var bStderr = new Buffer(0);
  var bStdout = new Buffer(0);

  proc.stderr.on('data', (stderr) => {
    bStderr = Buffer.concat([bStderr, new Buffer(stderr)]);
  });

  proc.stdout.on('data', (data) => {
    if (argv.verbose) { console.log(`${data}`); }
    bStdout = Buffer.concat([bStdout, new Buffer(data)]);
  });

  proc.on('close', (code) => {
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
  return through.obj((file, encoding, callback) => {
    init()
      .then(() => runTest(file))
      .then((output) => callback(null, output))
      .catch((error) => callback(error));
  });
}

module.exports = task;
module.exports.init = init;
