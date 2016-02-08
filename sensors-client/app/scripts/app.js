'use strict';

/**
 * @ngdoc overview
 * @name sensorsClientApp
 * @description
 * # sensorsClientApp
 *
 * Main module of the application.
 */

angular.module('app.config', []);
angular.module('app.services', []);

angular
  .module('sensorsClientApp', [
    'ngAnimate',
    'ui.router',
    'ngSanitize',
    'frapontillo.gage',
    'app.config',
    'app.services'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      });
  });
