(function(){
  	'use strict';

	angular
		.module('myApp')
	    .controller	('painelController',	Controller)

	function Controller($scope, $state, $http, $httpParamSerializer, $localStorage, LoginService){
		var self 		=	this
		self.deslogar	=	deslogar
		self.nome 		= $localStorage.dados.nome

		function deslogar(){
			LoginService.destroySession()
				.then(function(response){
					window.location.assign("http://localhost/paineldentista/#!/")
				}
			)
		}
	}
})();