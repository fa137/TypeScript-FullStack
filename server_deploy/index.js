var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var pubDir = "./dist";
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(pubDir));
app.get('/api', function (req, res, next) {
    res.json({
        api: 'Data served from backend server via port:3000 proxy'
    });
});
app.get('/', function (req, res, next) {
    res.sendFile('index.html', { root: pubDir });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, req, res, next) {
        res.status(error['status'] || 500);
        res.json({
            message: error.message,
            error: error
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (error, req, res, next) {
    res.status(error['status'] || 500);
    res.json({
        message: error.message,
        error: {}
    });
    return null;
});
app.listen(3000);
