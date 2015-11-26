angular.module('ContactServices', ['firebase'])

.factory('Contact', function($firebaseArray){
	var _url = 'https://shining-fire-9632.firebaseio.com/';
	var _ref = new Firebase(_url);
	var _firebasearr = $firebaseArray(_ref);

	var funciones = {
		add: function(contact){
			_firebasearr.$add({
				name:"GGGGGGGGG"
			}).then(function (ref){
				var id = ref.key();
				console.log("G: " + id);
			})
		}
	}
	return funciones;
})
