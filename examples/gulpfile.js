const gulp = require('gulp');
const elmTest = require('..');

gulp.task('default', () => {
  return gulp.src('test/*.elm')
    .pipe(elmTest());
});
