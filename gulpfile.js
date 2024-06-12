const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js')
    .pipe(concat('combined.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('default', gulp.series('scripts'));
