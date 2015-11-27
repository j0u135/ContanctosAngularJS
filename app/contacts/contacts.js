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

	var getCamposContact = function(contact){
		contact.name = $scope.name;
		contact.email = $scope.email;
		contact.work = $scope.work;
		contact.tels.work = $scope.tels.work;
		contact.tels.cel = $scope.tels.cel;
		contact.tels.home = $scope.tels.home;
		contact.address = $scope.address;
		contact.city = $scope.city;
		contact.state = $scope.state;
		contact.zip = $scope.zip;	
	}

	$scope.setScope = function(){
		$scope.contacts = Contact.setScope();
	}

	$scope.addContact = function(){
		var contact = {};
		contact.tels = {};
		getCamposContact(contact);
		Contact.add(contact).then(function (){
			$scope.vista_seleccionada = "lista";
			limpiarContact();
		});
	}

	$scope.updateContact = function(){
		var contact = {};
		contact.tels = {};
		getCamposContact(contact);
		contact.id = $scope.id;
		Contact.edit(contact).then(function (){
			$scope.vista_seleccionada = "lista";
			limpiarContact();
		});
	}

	$scope.removeContact = function(contact){
		Contact.remove(contact).then(function (){});
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

	$scope.showContact = function(contact){
		$scope.contact_selected = contact;		
		$scope.vista_seleccionada = "show";
	}

	$scope.mostrarVista = function(){
		return $scope.vista_seleccionada;
	}

	$scope.setVista = function(vista){
		$scope.vista_seleccionada = vista;	
	}

	$scope.setScope();

}]);