var gulp = require('gulp'),
browserSync = require('browser-sync');

gulp.task('serve', function() {
	
	browserSync.init({
		notify: false,
		port: 8080,
		server: {
			baseDir: ['app'],
			routes: {
				'/bower_components': 'bower_components',
				'/node_modules': 'node_modules'
			}
		}
		
	})

	gulp.watch(['app/**/*.*'])
		.on('change', browserSync.reload)

});

gulp.task('test', function() {

 	browserSync.init({
		notify: false,
		port: 8081,
		server: {
			baseDir: ['test','app'],
			routes: {
				'/bower_components': 'bower_components',
				'/node_modules': 'node_modules'
			}
		}
		
	})

	gulp.watch(['test/**/*.*', 'app/**/*.*'])
		.on('change', browserSync.reload)
	
});

gulp.task('default', ['serve']);