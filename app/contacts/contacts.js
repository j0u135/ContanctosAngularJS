'use strict';

angular.module('ContactosApp.contacts', ['ngRoute', 'ContactServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'contactsCtrl'
  });
}])

.controller('contactsCtrl', ['$scope', 'Contact', function($scope, Contact) {
	$scope.vista_seleccionada = "lista";
	$scope.contacts = [];

	$scope.name = "";
	$scope.email = "";
	$scope.work = "";
	$scope.tels = {};
	$scope.tels.work = "";
	$scope.tels.cel = "";
	$scope.tels.home = "";
	$scope.address = "";
	$scope.city = "";
	$scope.state = "";
	$scope.zip = "";

	var limpiarContact = function(){
		$scope.name = "";
		$scope.email = "";
		$scope.work = "";
		$scope.tels = {};
		$scope.tels.work = "";
		$scope.tels.cel = "";
		$scope.tels.home = "";
		$scope.address = "";
		$scope.city = "";
		$scope.state = "";
		$scope.zip = "";
	}

	$scope.setScope = function(){
		$scope.contacts = Contact.setScope();
	}

	$scope.addContact = function(){
		var contact = {
		"name": $scope.name,
		"email": $scope.email,
		"work": $scope.work,
		"tels": {
			"work": $scope.tels.work,
			"cel": $scope.tels.cel,
			"home": $scope.tels.home,
		},
		"address": $scope.address,
		"city": $scope.city,
		"state": $scope.state,
		"zip": $scope.zip
		}
		Contact.add(contact).then(function (){
			$scope.vista_seleccionada = "lista";
			limpiarContact();
		});

	}

	$scope.setEditContact = function(contact){
		$scope.id 			= contact.$id;
		$scope.name 		= contact.name;
		$scope.email 		= contact.email;
		$scope.work 		= contact.work;
		$scope.tels.work 	= contact.tels.work;
		$scope.tels.cel 	= contact.tels.cel;
		$scope.tels.home 	= contact.tels.home;
		$scope.address 		= contact.address;
		$scope.city 		= contact.city;
		$scope.state 		= contact.state;
		$scope.zip 			= contact.zip;
		
		$scope.setVista('editar');
	}

	$scope.mostrarVista = function(){
		return $scope.vista_seleccionada;
	}

	$scope.setVista = function(vista){
		$scope.vista_seleccionada = vista;	
	}

	$scope.setScope();

}]);