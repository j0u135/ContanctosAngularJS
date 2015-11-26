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
			var promise = _firebasearr.$add(contact).then(function (ref){
				var id = ref.key();
				console.log("GGGGGG: " + id);
			});
			return promise;
		}
	}
	return funciones;
})
