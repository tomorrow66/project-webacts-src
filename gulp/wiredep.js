'use strict';

var gulp = require('gulp');

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  return gulp.src('src/index.html')
    .pipe(wiredep({
      directory: 'src/bower_components',
      exclude: [/SHA-1/, /bootstrap-sass-official/, /bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
    }))
    .pipe(gulp.dest('src'));
});
