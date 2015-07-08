'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
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
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('bin'))
});

gulp.task('default', ['concatScripts', 'minifyScripts'], function () {
	console.log('adios mundo cruel!');
});