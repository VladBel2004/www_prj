var gulp 	     = require('gulp'),
	browser_sync = require('browser-sync'),
	sass         = require('gulp-sass');

gulp.task('browser_sync', function(){
	browser_sync({
		server: {
			baseDir: '.',
		},
		ui: {
			port: 2001
		},
		port: 2000,
		notify: false // no massage
	});
})

gulp.task('whatch', ['browser_sync'], function(){
	gulp.watch('**/*.*', ['is_change']);
	gulp.watch('*.*', ['is_change']);
})

gulp.task('is_change', function(){
	console.log("Some file was changed.");
	browser_sync.reload();
});

gulp.task('sass', function () {
	return gulp.src('js_lib/videojs/src/css/vjs.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./css'));
  });