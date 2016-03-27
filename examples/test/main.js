var assert = require('assert');
var fs = require('fs');
var elmTest = require('../..');
var gutil = require('gulp-util');

function checkTest(file) {
  console.log(file);
}

describe('gulp-elm-test', function(){

  before(function(done){
    this.timeout(30000);
    elmTest.init().then(done);
  });

  it('should pass the Elm test.', function(done){
    var myElm = elmTest();
    myElm.end(new gutil.File({path: "test/PassingTest.elm"}));
    myElm.once('error', function(error) {
      assert(false);
    });
    myElm.once('finish', function(data) {
      done();
    });
  });

  it('should fail the Elm test.', function(done){
    var myElm = elmTest();
    myElm.write(new gutil.File({path: "test/FailingTest.elm"}));
    myElm.once('error', function(error) {
      done();
    });
  });
});
