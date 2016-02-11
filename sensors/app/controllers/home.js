var express = require('express'),
  router = express.Router(),
  config = require('../../config/config');
fs = require('fs');
var gpio = require("pi-gpio");

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
  // load the single view file (angular will handle the page changes on the front-end)
  res.sendfile('./public/index.html');
});

router.get('/getCurrentTemperatur', function (req, res, next) {
  var response = {};
  fs.readFile(config.data.pathTow1_slave + '/' + config.device.serial + '/' + config.data.w1_slaveFilename, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    response = {
      temperatur: data.match(/(?:\d*\.)?\d{4,5}/)[0]
    }
    res.json(response);
  });

});

router.get('/enableLed/:gpiopin', function (req, res, next) {
  var gpiopin = req.params.gpiopin;
  gpio.read(gpiopin, function (err, value) {
    if (value != 1) {
      gpio.open(gpiopin, "output", function (err) {
        if (err) {
          console.error('ERROR: Can not open gpio pin ' + gpiopin);
          res.json({status: false});
        }
        else {
          gpio.write(gpiopin, 1, function () {
            console.log('LED enabled' + gpiopin);
            res.json({status: true});
          });
        }
      });
    } else {
      res.json({status: true});
    }
  });

});

router.get('/disableLed/:gpiopin', function (req, res, next) {
  var gpiopin = req.params.gpiopin;
  gpio.read(gpiopin, function (err, value) {
    if (value == 1) {
      gpio.close(gpiopin);
    }
    res.json({status: value});
  });


});

router.get('/getLedStatus', function (req, res, next) {
  var response = [{
    color: 'red',
    gpiopin: 11,
    status: false
  },
    {
      color: 'yellow',
      gpiopin: 13,
      status: false
    },
    {
      color: 'green',
      gpiopin: 15,
      status: false
    }
  ]
  gpio.read(11, function (err, value) {
    response[0].status = (value) ? 1 : 0;
    gpio.read(13, function (err, value) {
      response[1].status = (value) ? 1 : 0;
      gpio.read(15, function (err, value) {
        response[2].status = (value) ? 1 : 0;
        res.json(response);
      });
    });
  });






});
