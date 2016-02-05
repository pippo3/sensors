var express = require('express'),
  router = express.Router(),
  config = require('../../config/config');
fs = require('fs')

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
	// load the single view file (angular will handle the page changes on the front-end)
	res.sendfile('./public/index.html');
});

router.get('/getCurrentTemperatur', function (req, res, next) {
  var response ={};
  fs.readFile(config.data.pathTow1_slave + '' + config.device.serial + '' + config.data.w1_slaveFilename, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    response = {
      temperatur: data.match(/(?:\d*\.)?\d{4,5}/)[0]
    }
    res.json(response);
  });

});

router.get('/getLedStatus', function (req, res, next) {
	var response = [{
		color: 'red',
		gpiopin: 0,
		status: false
	},
	{
		color: 'yellow',
		gpiopin: 1,
		status: false
	},
	{
		color: 'green',
		gpiopin: 1,
		status: false
	}
	]


	res.json(response);
});
