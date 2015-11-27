angular.module('ContactServices', ['firebase'])

.factory('Contact', function($firebaseArray){
	var _url = 'https://shining-fire-9632.firebaseio.com/';
	var _ref = new Firebase(_url);
	var _firebasearr = $firebaseArray(_ref);

	var funciones = {
		setScope: function(){
			return _firebasearr;
		},
		add: function(contact){
			var promise = _firebasearr.$add(contact).then(function (ref){});
			return promise;
		},
		edit: function(contact){
			var record = {};
			record.tels = {};
			record = _firebasearr.$getRecord(contact.id);

			record.name =		contact.name;
			record.email =		contact.email;
			record.work =		contact.work;
			record.tels.work =	contact.tels.work;
			record.tels.cel =	contact.tels.cel;
			record.tels.home =	contact.tels.home;
			record.address =	contact.address;
			record.city =		contact.city;
			record.state =		contact.state;
			record.zip =		contact.zip;

			var promise = _firebasearr.$save(record).then(function (ref){});
			return promise;
		},
		remove: function(contact){
			var promise = _firebasearr.$remove(contact).then(function (ref){});
			return promise;
		}
	}
	return funciones;
})
