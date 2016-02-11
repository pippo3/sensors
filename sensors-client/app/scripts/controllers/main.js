'use strict';

/**
 * @ngdoc function
 * @name sensorsClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sensorsClientApp
 */
angular.module('sensorsClientApp')
  .controller('MainCtrl', function ($scope, $http, $filter, $interval, $log, urls, gaugeconfig) {
    getData();
    $interval(function () {
      console.log('intervall');
      getData();
    }, 10000)

    function getData() {
      $http({
        method: 'GET',
        url: urls.host + '' + urls.getCurrentTemperatur
      }).then(function successCallback(response) {
        gaugeconfig.title = 'Temperatur Wohnzimmer';
        gaugeconfig.value = $filter('number')(response.data.temperatur / 1000, 1);
        $scope.config = gaugeconfig;
      }, function errorCallback(response) {
        $log.error('Can not get temperatur data from sensor');
      });
    }

  });
