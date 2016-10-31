'use strict';

/**
 * @ngdoc function
 * @name remembroApp.controller:DashboardCtrl
 * @description
 * # MainCtrl
 * Controller of the remembroApp
 */
angular.module('remembroApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
