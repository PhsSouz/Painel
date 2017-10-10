(function(){
	'use strict'
	
	angular
		.module('myApp')
		.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider

			//Inicio
		    .state('inicio', {
		        url: '/',
		        templateUrl: 'modules/views/home/inicio.php',
		    })		    

		    //Usuarios
		    .state('usuario', {
		        url: 'usuarios',
		        templateUrl: 'modules/views/usuario/usuarios.php',
		    })			    

		    .state('usuario-edit', {
		        url: 'usuarios/edit/:id',
		        templateUrl: 'modules/views/usuario/usuariosEdit.php',
		    })			    

		    .state('usuario-create', {
		        url: 'usuarios/create/',
		        templateUrl: 'modules/views/usuario/usuariosCreate.php',
		    })		    

		    //Consultas
		    .state('consultas', {
		        url: 'consulta/list/:id',
		        templateUrl: 'modules/views/consulta/consultas.php',
		    })		    

		    .state('consulta-edit', {
		        url: 'consulta/edit/:id',
		        templateUrl: 'modules/views/consulta/consultasEdit.php',
		    })		    

		    .state('consulta-create', {
		        url: 'consulta/create/:id',
		        templateUrl: 'modules/views/consulta/consultasCreate.php',
		    })

		    //Etrato
		    .state('pagamentos', {
		        url: 'pagamento',
		        templateUrl: 'modules/views/financeiro/pagamentos.php',
		    })			    

		    .state('pagamentos-create', {
		        url: 'pagamento/create/',
		        templateUrl: 'modules/views/financeiro/pagamentosCreate.php',
		    })			    
		})
	})
();
