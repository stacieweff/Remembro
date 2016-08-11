'use strict';

/**
 * @ngdoc function
 * @name remembroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the remembroApp
 */
angular.module('remembroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
