(function() {
  'use strict';
  angular.module('remembroApp')

    .factory('Auth', function($firebaseAuth) {
      return $firebaseAuth();
    });
})();
