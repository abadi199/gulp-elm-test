# gulp-elm-test
Gulp plugin for running [elm-test](https://github.com/deadfoxygrandpa/elm-test)

Example:
```JavaScript
const elmTest = require('gulp-elm-test');

gulp.task('test', () => {
  return gulp.src('test/*Test.elm')
    .pipe(elmTest());
});
```
