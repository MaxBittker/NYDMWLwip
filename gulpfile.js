var gulp = require('gulp');
var fs = require('fs');
var markdown = require('gulp-markdown'); //require('gulp-marked');//require('gulp-remarkable');
var htmlreplace = require('gulp-html-replace');
var minifyHTML = require('gulp-minify-html');
var headerfooter = require('gulp-headerfooter');
var watch = require('gulp-watch');
var bootlint = require('gulp-bootlint');
var gprint = require('gulp-print');
var webserver = require('gulp-webserver');
var html5Lint = require('gulp-html5-lint');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function() {
    return gulp.src('./less/style.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['serve', 'watch']);

gulp.task('serve', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            // directoryListing: true,
            open: true
        }));
});

gulp.task('watch', ['build'], function() { //watches  these file globs for changes & rebuilds accordingly
    gulp.watch(['./src/*.md', './components/*','./less/*'], ['build']);
});

gulp.task('build', ['less'], function() {
    return gulp.src('src/*.md')
        .pipe(markdown())
        // .pipe(gprint())
        .pipe(headerfooter.header('./components/head.html'))
        .pipe(headerfooter.footer('./components/foot.html'))
        // .pipe(htmlreplace({ //these replace <!-- build:xxxxx --> tags
        //     'c1':c1,
        //     'c2':c2,
        //     'c3':c3,
        //     'c4':c4
        // }))
        // .pipe(minifyHTML(minifyOptions)) //this line can be commented out 
        // .pipe(gulp.dest('.')) //set build destination here
        .pipe(gulp.dest('.'))
        // .pipe(html5Lint());        
        .pipe(bootlint());
});
