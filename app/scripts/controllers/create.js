'use strict';

/**
 * @ngdoc function
 * @name remembroApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the remembroApp
 */
angular.module('remembroApp')
  .controller('CreateCtrl', function (todoSvc) {

      var vm = this;
      vm.submitNew = submitNew;
      vm.newItemData = {
          description: '',
          status: '',
          title: '',
          assignedTo: '',
          createdOn: '',
          lastModified: ''
      }

      function createTodo() {
          if (vm.newItemData.createdOn === '') {
              vm.newItemData.createdOn = new Date();
          }
          vm.newItemData.lastModified = new Date();
          todoSvc.createTodo(vm.newItemData).then(function (response){
              console.log(response);
          });
      }

      function submitNew(isValid) {
          if (isValid) {
              createTodo();
          }
      }

  });
