'use strict';

/**
* @ngdoc service
* @name remembroApp.todoSvc
* @description
* # todoSvc
* Factory in the remembroApp.
*/
angular.module('remembroApp')
.factory('todoSvc', function () {
    function getTodos() {
        return firebase.database().ref('ToDos').once('value').then(function(snapshot) {
            //convert data from an object of objects to an array of objects with lodash _.values(obj)
            var values = _.values(snapshot.val());
            return values;
        });
    }

    return {
        getTodos: getTodos
    };
});
