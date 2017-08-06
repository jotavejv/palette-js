'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

gulp.task('sass', function () {
    return gulp.src('./style/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./style/**/*.sass', ['sass']);
});


gulp.task('default',["sass:watch"], function(){});

gulp.task('build', function() {
    gulp.src('src/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('dist'))
});