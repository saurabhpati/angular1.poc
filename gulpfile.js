let gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', () => {
    nodemon({
        script: './src/app/**.js',
        ext: 'js'
    }).on('rs', () => {
        gulp.src('./src/app/server.js');
        gulp.watch(['./src/**/**.js']);
    });
});