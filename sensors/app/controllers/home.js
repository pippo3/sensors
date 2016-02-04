var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
	//res.json({});
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
/**
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
**/
});

router.get('/getCurrentTemperatur', function (req, res, next) {
res.json({string: 'hallo temperatur'});
});

router.get('/getLedStatus', function (req, res, next) {
res.json({string: 'hallo LED Status'});
});
