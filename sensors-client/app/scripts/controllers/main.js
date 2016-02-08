'use strict';

/**
 * @ngdoc function
 * @name sensorsClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sensorsClientApp
 */
angular.module('sensorsClientApp')
  .controller('MainCtrl', function ($scope,$http,$filter, urls, gaugeconfig) {


    $http({
      method: 'GET',
      url: urls.host + '' + urls.getCurrentTemperatur
    }).then(function successCallback(response) {
      gaugeconfig.title = 'Temperatur Wohnzimmer';
      gaugeconfig.value = $filter('number')(response.data.temperatur / 1000, 1);
      $scope.config = gaugeconfig;
    }, function errorCallback(response) {

    });

  });
