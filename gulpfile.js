'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var seq = require('gulp-sequence');

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


gulp.task('default', seq('clean', 'build', 'backend', 'serve'));
