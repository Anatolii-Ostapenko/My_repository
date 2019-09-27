var gulp = require("gulp"); 
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cssUrls = require('gulp-css-urls');

gulp.task('serv', function() {
  browserSync.init({
      server: {
          baseDir: "./public"
      }
  });
  browserSync.watch('public', browserSync.reload)
});

gulp.task('less', function () {
    return gulp.src('./src/style/*.less')
      .pipe(less())
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe(cssmin().on('error', function(err) {
        console.log(err);
      })) 
      .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function(){
  return gulp.watch('./src/style/*.less', gulp.series('less'));
});
gulp.task('cssUrls', function() {
  return gulp.src('./public/css/* .css')
    .pipe(cssUrls({
      prepend: 'http://localhost:3000',
      append: '?version=2',
    }))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('default', gulp.series(
  gulp.parallel('watch','serv', 'cssUrls')
));