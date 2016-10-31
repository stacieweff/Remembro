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
      $scope.user = firebase.auth().currentUser;
      $scope.userPanelShow = false;


      $scope.oauthLogin = function() {
          $scope.err = null;
          var auth = firebase.auth();

          var provider = new firebase.auth.FacebookAuthProvider();
          auth.signInWithPopup(provider).then(function(result) {
              // User signed in!
              $timeout(function() {
                  $scope.user = result.user;
                  $scope.createUserInRemembro();
              });
          }).catch(function(error) {
              showError(error);
          });
      };

      $scope.checkIfUserInRemembro = function() {
          //pseudo code
          //Do a GET to your Remembro users node where displayName is $scope.user.displayName
          //if it comes back null - you know the user is brand new.  If not, they are returning.
          //if new do this
          $scope.createUserInRemembro();
      };

      $scope.createUserInRemembro = function() {
        //POST to add a new object to the users node for this new user - with name, email, etc...
      };

      $scope.logout = function() {
        firebase.auth().signOut().then(function() {
            console.log('we signed out - show some ui message');
            $scope.checkIfAuthed();
        }, function(error) {
            console.log('signout' + error + ', show a message, log it');
        });
      };

      $scope.toggleUserPanel = function() {
          $scope.userPanelShow = !$scope.userPanelShow;
      };

      $scope.checkIfAuthed = function() {
          console.log(firebase.auth());
          if (firebase.auth().currentUser) {
              $scope.user = firebase.auth().currentUser;
          } else {
              console.log('got in here');
              $timeout(function(){
                  $scope.user = firebase.auth().currentUser;
                  $scope.userPanelShow = false;
              });
          }
      };

      function init() {
          $scope.checkIfAuthed();
      }

      function showError(err) {
          $scope.err = err;
      }

      init();

  });
