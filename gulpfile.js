var gulp = require("gulp");
var uglify = require("gulp-uglify");
var del = require('del');
gulp.task('copyless',function(){
    gulp.src("./src/**/*.less")
        .pipe(gulp.dest('lib'))
})
gulp.task('clean',function(cb){
    del(['dist/*', 'lib/*'], {dot: true}, cb());
})
gulp.task("default",["clean","copyless"])
