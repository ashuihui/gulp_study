/**
 * Created by ashui on 17-8-7.
 */
`use strict`
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
gulp.task('sass', function(){
    gulp.src('src/main.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy-assets', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'copy-assets','imagemin']);