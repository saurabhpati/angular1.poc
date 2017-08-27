let gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', () => {
    nodemon({
        script: './server.js',
        ext: 'js'
    }).on('rs', () => {
        gulp.src('./src/app/server.js');
        gulp.watch(['./src/**/**.js', './**.html', '*.js', '*.html']);
    });
});