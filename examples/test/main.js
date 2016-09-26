var assert = require('assert');
var elmTest = require('../..');
var gutil = require('gulp-util');

describe('gulp-elm-test', function() {

    it('should pass the Elm test.', function(done) {
        this.timeout(30000);

        var myElm = elmTest();
        myElm.end(new gutil.File({ path: "test/PassingTest.elm", }));
        myElm.once('error', function(error) {
            assert(false);
        });
        myElm.once('finish', function(data) {
            done();
        });
    });

    it('should fail the Elm test.', function(done) {
        this.timeout(30000);

        var myElm = elmTest();
        myElm.write(new gutil.File({ path: "test/FailingTest.elm", }));
        myElm.once('error', function(error) {
            done();
        });
    });
});
