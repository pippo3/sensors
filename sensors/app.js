

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var config = require('./config/config');

require('./config/express')(app, config);

server.listen(config.port, function () {
  var env = process.env.NODE_ENV || 'development';
  console.log('Express server listening on port ' + config.port + ' in ' + env + ' mode');
});


io.on('connection', function (socket) {
  console.log('connect');

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    console.log('disconnect');
  });
});

