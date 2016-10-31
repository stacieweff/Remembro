'use strict';

/**
 * @ngdoc function
 * @name remembroApp.controller:DashboardCtrl
 * @description
 * # MainCtrl
 * Controller of the remembroApp
 */
angular.module('remembroApp')
  .controller('DashboardCtrl', function ($scope, todoSvc) {
      var vm = this;

      function init() {
          getTodos();
      }

      function getTodos() {
          todoSvc.getTodos().then(function(response) {
              console.log(response);
          });
      }

      init();
  });
