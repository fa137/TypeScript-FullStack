'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');
var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */
  server.middleware = proxyMiddleware('/', {target: 'http://localhost:3000', changeOrigin: true});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

gulp.task('nodemon', function () {
  gulp.watch("server/**/*.ts", ["tsc-compile"]);
  nodemon({
    script: './server_deploy/index.js'
    , ext: 'js'
    , env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('tsc-compile', function () {
  
  var tsProject = ts.createProject('tsconfig.json');
  
  return gulp.src(['server/**/*.ts', '.tmp/typings/**/*.ts'])
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('./server_deploy'));
});


gulp.task('backend', ['tsc-compile', 'nodemon']);

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
