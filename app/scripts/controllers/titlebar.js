'use strict';

/**
 * @ngdoc function
 * @name remembroApp.controller:TitlebarCtrl
 * @description
 * # TitlebarCtrl
 * Controller of the remembroApp
 */
angular.module('remembroApp')
  .controller('TitlebarCtrl', function ($scope, Auth, $location, $timeout) {
      $scope.oauthLogin = function(provider) {
          $scope.err = null;
          var auth = firebase.auth();

          var provider = new firebase.auth.FacebookAuthProvider();
          auth.signInWithPopup(provider).then(function(result) {
              // User signed in!
              console.log(result);
              $timeout(function() {
                  $scope.user = result.user;
              });
          }).catch(function(error) {
              showError(error);
          });
      };

      $scope.checkIfAuthed = function() {
          console.log(Auth.$getAuth());
          if(!Auth.$getAuth()) {

          }
      }

      $scope.oauthLogout = function() {
          firebase.auth().signOut().then(function() {
              $timeout(function() {
                  $scope.user = null;
              });
          }, function(error) {
              showError(error)
          });
      };

      $scope.showAccountInfo = function() {
          $scope.isShowingInfo = !$scope.isShowingInfo;
      };

      function init() {
          $scope.checkIfAuthed();
      }

      function showError(err) {
          $scope.err = err;
      }

      init();

  });
