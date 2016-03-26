const gulp = require('gulp');
const elmTest = require('..');

gulp.task('default', function() {
  return gulp.src('*.elm')
    .pipe(elmTest());
});
