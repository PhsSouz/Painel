(function(){
  	'use strict';

	angular
		.module('myApp')
	    .controller	('painelController',	Controller)

	function Controller($scope, $state, $http, $httpParamSerializer, $localStorage, LoginService, ValidateLogin){
		var self 		=	this
		self.deslogar	=	deslogar
		self.nome 		= 	window.localStorage.getItem('Nome')
		self.flag 		=	true

		if(_.isEmpty(window.localStorage.getItem('Token')) == true){
			self.flag = false
		}

		function deslogar(){
			LoginService.destroySession()
				.then(function(response){
					ValidateLogin.deleteLogin(response)
					window.location.assign("http://localhost/github/Painel/#!/")
				}
			)
		}
	}
})();