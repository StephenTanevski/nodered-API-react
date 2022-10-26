var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var _ = require('underscore');
var multer  = require('multer');

var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
// app.use('/users', users);
var done=false;

app.use(multer({ dest: './uploads/',
rename: function (fieldname, filename) {
  return filename+Date.now();
},
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.post('filter-reports',function(req,res){
console.log('Working on the filtered reports....');
  if(done==true){
    console.log(req.files);
    res.end("File uploaded.");
  }
});

/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
module.exports = router;


var express = require('express');
var request = require("request");
var _ = require('underscore');
var schedule = require('node-schedule');
var filename; 