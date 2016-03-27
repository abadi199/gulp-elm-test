const gulp = require('gulp');
const elmTest = require('..');

gulp.task('test', () => {
  return gulp.src('test/*Test.elm')
    .pipe(elmTest());
});
