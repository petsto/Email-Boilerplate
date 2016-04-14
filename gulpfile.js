var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var less = require('gulp-less');
var jade = require('gulp-jade');
var premailer = require('gulp-premailer');
var browserSync = require('browser-sync');

// For local usage
gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./dist/"
    }
  });
});

// Reloading
gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Optimize Images
gulp.task('images', function(){
  gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

// Convert Jade to HTML
gulp.task('jade', function(){
  gulp.src('src/jade/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
});

// LESS to CSS
gulp.task('less', function(){
  gulp.src(['src/less/*.less'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(less())
    .pipe(autoprefixer('last 4 versions'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({stream:true}))
});

// Building Email
gulp.task('email', ['images', 'less', 'jade'], function () {
  gulp.src('./dist/*.html')
    .pipe(premailer())
    .pipe(gulp.dest('./dist/email/'));
});

// Default Task
gulp.task('default', ['images', 'jade', 'less', 'browser-sync'], function(){
  gulp.watch("src/less/**/*.less", ['less']);
  gulp.watch("src/jade/**/*.jade", ['jade']);
  gulp.watch("*.html", ['bs-reload']);
});