(function(){
	'use strict'
	angular
		.module('myApp', ['ui.router',
						  'ngStorage',
						  'angularUtils.directives.dirPagination',
						  'satellizer'])

		.run(function($localStorage, $state){
			$state.transitionTo("inicio")
		})

		.controller('controlerModule', Controller)


		function Controller($state, $localStorage, ValidateLogin){
			ValidateLogin.validacao()
		}
	})
();
