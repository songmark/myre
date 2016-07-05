var gulp=require("gulp"),
webpack=require("gulp-webpack"),
webpackConfig=require("./webpack.config.js");
gulp.task("build",function(){
	gulp.src("./main.js").
	pipe(webpack(Object.create(webpackConfig))).
//	pipe(concat()).
//	pipe(uglify()).
	pipe(gulp.dest("./build/"));
})


var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
    })

gulp.task("watch",function(){
	gulp.watch("./*",["build"]);
})


gulp.task("default",["build","watch","webserver"]);