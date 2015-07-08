'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('concatScripts', function () {
	gulp.src([
		'app.js',
		'todoListsController.js',
		'todoListController.js',
		'todoService.js'
		])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('bin'))
});

gulp.task('minifyScripts', function () {
	gulp.src('bin/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('bin'))
});

gulp.task('default', ['hello'], function () {
	console.log('mundo cruel!');
});