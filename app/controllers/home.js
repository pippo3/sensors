var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
	res.json({});
/**
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
**/
});

router.get('/getCurrentTemperatur', function (req, res, next) {
res.json({string: 'hallo rest'});
});

router.get('/getLedStatus', function (req, res, next) {
res.json({string: 'hallo LED Status'});
});
