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

    function createTodo(item) {
        // A post entry.
        var itemData = {
            description: item.description,
            status: item.status,
            title: item.title,
            assigned_to: item.assignedTo,
            created_on: item.createdOn,
            last_modified: new Date()
        };

        // Get a key for a new Post.
        var newPostKey = firebase.database().ref('ToDos').push().key;
        console.log(newPostKey);
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates[newPostKey] = itemData;
        // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        return firebase.database().ref('ToDos').update(updates);
    }

    return {
        getTodos: getTodos,
        createTodo: createTodo
    };
});
