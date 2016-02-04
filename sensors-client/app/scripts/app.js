'use strict';

/**
 * @ngdoc overview
 * @name sensorsClientApp
 * @description
 * # sensorsClientApp
 *
 * Main module of the application.
 */
angular
  .module('sensorsClientApp', [
    'ngAnimate',
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      })
  });
