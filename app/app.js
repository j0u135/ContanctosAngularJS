'use strict';

// Declare app level module which depends on views, and components
angular.module('ContactosApp', [
  'ngRoute',
  'ContactosApp.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
