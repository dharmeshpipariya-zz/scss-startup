var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpIf = require('gulp-if');
var gulpCleanCss = require('gulp-clean-css');

var minifyOutput = false;

// gulp.task('clean', function() {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// });

// gulp.task('lint', function() {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// });

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulpIf(minifyOutput, gulpCleanCss()))
    .pipe(gulp.dest('./css'));
});

// gulp.task('build:scss', function() {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// });

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
});

// gulp.task('default', function() {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// });
