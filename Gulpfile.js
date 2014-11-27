// Include gulp
var gulp = require('gulp');
// Include plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile our Sass
/*gulp.task('sass', function() {
	return gulp.src('scss*//*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});*/

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('test', function() {
	return gulp.src(["src/**/*.js", "test/**/*.js"])
		.pipe(jasmine());
});

// Default Task
gulp.task('default', ['lint', /* 'sass', */ 'scripts' /*, 'watch' */]);