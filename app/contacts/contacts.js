'use strict';

angular.module('ContactosApp.contacts', ['ngRoute', 'ContactServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'contactsCtrl'
  });
}])

.controller('contactsCtrl', ['$scope', 'Contact', function($scope, Contact) {

	$scope.add = function(contact){
		console.log(Contact.add())
	}

	$scope.add();

}]);