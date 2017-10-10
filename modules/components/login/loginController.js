(function(){
  	'use strict';

	angular
		.module('myApp')
	    .controller	('loginController',	Controller)

	function Controller($scope, $http, $httpParamSerializer, $localStorage, LoginService){

		var self 		= 	this	
		self.logar 		=	logar
		self.alert 		=	false

		function logar(data) {
			LoginService.login(data).then(function(response){
				if(response.data != ''){
					$localStorage.dados = response.data[0]
					 window.location.assign("inicio")
				}
				else{
					self.alert 	=	true	
				}
			})
		}
	}
})();
