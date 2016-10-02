
var gulp     = require('gulp'),
    plumber  = require('gulp-plumber'),
    rename   = require('gulp-rename'),
    gutil    = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    imagemin     = require('gulp-imagemin'),
    cache        = require('gulp-cache'),
    stylus       = require('gulp-stylus'),
    jade         = require('gulp-jade'),
    clean        = require('gulp-clean'),
    premailer    = require('gulp-premailer'),
    browserSync  = require('browser-sync');


// For local usage
// ----------
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./dist/"
        }
    });
});


// Reloading
// ----------
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// Optimize Images
// ----------
gulp.task('images', function(){
    gulp.src('src/images/**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images/'));
});


// Convert Jade to HTML
// ----------
gulp.task('jade', function(){
    gulp.src('src/jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dist/'));
});


// Stylus to CSS
// ----------
gulp.task('stylus', function() {
    return gulp.src('./src/stylus/styles.styl')
        .pipe( plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }) )
        .pipe( stylus() )
        .pipe( gulp.dest('dist/css/') )
        .pipe( browserSync.reload( { stream: true } ) );
});


// Building Email
// ----------
gulp.task('email', ['images', 'less', 'jade'], function () {
    gulp.src('./dist/*.html')
        .pipe(premailer())
        .pipe(gulp.dest('./dist/email/'));
});


// Default Task
// ----------
gulp.task('default', ['images', 'jade', 'stylus', 'browser-sync'], function(){
    gulp.watch("src/stylus/**/*.styl", ['less','bs-reload']);
    gulp.watch("src/jade/**/*.jade", ['jade','bs-reload']);
    gulp.watch("src/dist/*.html", ['bs-reload']);
});


// Clean Dist
// ----------
gulp.task('clean', function () {
    return gulp.src('./dist/', {read: false})
        .pipe(clean());
});
