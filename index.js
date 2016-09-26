const _ = require('lodash')
const spawn = require('cross-spawn')
const gutil = require('gulp-util')
const path = require('path')
const through = require('through2')

const PLUGIN_NAME = 'gulp-elm-test'

// some of the following code is based on https://github.com/sun-zheng-an/gulp-shell/blob/4de040ab0b96d05aba5d6e054b61f4a3ab3227e6/index.js, Copyright (c) 2014 Sun Zheng'an, under the MIT license
function normalizeOptions(options) {
    const pathToBin = path.join(process.cwd(), 'node_modules', '.bin');
    const pathName = /^win/.test(process.platform) ? 'Path' : 'PATH';
    const newPath = pathToBin + path.delimiter + process.env[pathName];

    return _.extend({
        elmTest: 'elm-test',
        args: [],
        verbose: false,
        errorMessage: 'Running tests for `<%= file.path %>` failed with exit code <%= error.code %>',
        quiet: false,
        cwd: process.cwd(),
        env: _.extend(process.env, _.fromPairs([[pathName, newPath]]), options ? options.env : undefined),
    }, options);
}

function runCommand(command, args, options, file, done) {
    const allArgs = (args || []).concat(options.args);
    if (options.verbose) {
        gutil.log(gutil.colors.cyan(command + ' ' + allArgs.join(' ')));
    }

    let stdout = null;
    const child = spawn(command, allArgs, {
        env: options.env,
        cwd: options.cwd,
        timeout: options.timeout,
        stdio: [
            'pipe',
            options.quiet ? 'pipe' : process.stdout,
            process.stderr,
        ],
    }).on('close', (code) => {
        if (code !== 0) {
            const errorContext = {
                command: command,
                file: file,
                error: { code: code, },
            };

            if (options.quiet) {
                // if output wasn't already display, show since there was a failed test
                gutil.log(stdout.toString());
            }

            done({ message: gutil.template(options.errorMessage, errorContext), });
        } else {
            done();
        }
    });

    if (options.quiet) {
        // buffer output in case there's an error
        stdout = new Buffer(0);
        child.stdout.on('data', (chunk) => { stdout = Buffer.concat([ stdout, new Buffer(chunk), ]); });
    }
}

function shell(options) {
    options = normalizeOptions(options);

    const stream = through.obj(function (file, unused, done) {
        const self = this;

        runCommand(options.elmTest, [ file.path, '--yes', ], options, file, function (error) {
            if (error) {
                self.emit('error', new gutil.PluginError({
                    plugin: PLUGIN_NAME,
                    message: error.message,
                }));
            } else {
                self.push(file);
            }
            done();
        });
    });

    stream.resume();

    return stream;
}

module.exports = shell;
