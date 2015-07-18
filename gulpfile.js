/**
 * Assets Compil Tasking
 */

var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var babel = require('gulp-babel')
var order = require('gulp-order')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var browserSync = require('browser-sync').create()

function handleError(err) {
    console.log(err.toString())
    this.emit('end')
}

gulp.task('js', function() {
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', handleError)
        .pipe(order([
            'js/Core.js',
            'js/Assets.js',
            'js/Helper.js',
            'js/**/*.js',
            'js/game.js'
        ]))
        .pipe(concat('game.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('static/js'))
})

gulp.task('watch', ['js'], function() {
    browserSync.init({
        proxy: "localhost:5000",
    })

    gulp.watch(['js/**/*.js'], ['js', browserSync.reload])
    gulp.watch(['static/**/*.html'], browserSync.reload)
    gulp.watch(['static/img/**/*.{jpg,png}'], browserSync.reload)
    gulp.watch(['static/css/**/*.css'], browserSync.reload)
})
