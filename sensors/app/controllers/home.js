var express = require('express'),
  router = express.Router();

module.exports = function (app, config) {
  app.use('/', router);
  console.log('Config: ',  config );
};


router.get('/', function (req, res, next) {
	// load the single view file (angular will handle the page changes on the front-end)
	res.sendfile('./public/index.html');
});

router.get('/getCurrentTemperatur', function (req, res, next) {
	var response = {
		temperatur: 2231
	}
	res.json(response);
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
