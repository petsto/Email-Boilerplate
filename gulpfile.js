
var gulp     = require('gulp'),
    plumber  = require('gulp-plumber'),
    rename   = require('gulp-rename'),
    gutil    = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    imagemin     = require('gulp-imagemin'),
    cache        = require('gulp-cache'),
    stylus       = require('gulp-stylus'),
    pug          = require('gulp-pug'),
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


// Convert Pug to HTML Templates
// ----------
gulp.task('templates', function(){
    gulp.src('src/templates/*.pug')
        .pipe(pug({
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
gulp.task('email', ['images', 'stylus', 'templates'], function () {
    gulp.src('./dist/*.html')
        .pipe(premailer())
        .pipe(gulp.dest('./dist/email/'));
});


// Default Task
// ----------
gulp.task('default', ['images', 'templates', 'stylus', 'browser-sync'], function(){
    gulp.watch("src/stylus/**/*.styl", ['stylus','bs-reload']);
    gulp.watch("src/templates/**/*.pug", ['templates','bs-reload']);
    gulp.watch("src/dist/*.html", ['bs-reload']);
});


// Clean Dist
// ----------
gulp.task('clean', function () {
    return gulp.src('./dist/', {read: false})
        .pipe(clean());
});
