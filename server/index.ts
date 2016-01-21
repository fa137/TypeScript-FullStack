import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {join} from 'path';

const pubDir = "./dist";
const app: express.Express = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(pubDir));

app.get('/api', function(req, res, next){
    res.json({
        api: 'Data served from backend server via port:2000 proxy'
    });
})
app.get('/', function(req, res, next){
  res.sendFile('index.html', { root: pubDir });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  app.use((error: any, req, res, next) => {
    res.status(error['status'] || 500);
    res.json({
      message: error.message,
      error
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((error: any, req, res, next) => {
  res.status(error['status'] || 500);
  res.json({
    message: error.message,
    error: {}
  });
  return null;
});

app.listen(2000);