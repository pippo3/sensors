

var express = require('express'),
  config = require('./config/config');

var app = express();

require('./config/express')(app, config);

app.listen(config.port, function () {
  var env = process.env.NODE_ENV || 'development';
  console.log('Express server listening on port ' + config.port + ' in ' + env + ' mode');
});

