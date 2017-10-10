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


		function Controller($state, $localStorage){
			var self = this

			self.permissao 	= $localStorage.dados

			if(self.permissao.tipo == 3){
				self.menu = [
					{
						rota: 'inicio',
						icone: 'pe-7s-graph',
						nome: 'Inicio'
					},				
					{
						rota: 'usuario',
						icone: 'pe-7s-user',
						nome: 'Usuários'
					},				
					{
						rota: 'consultas',
						icone: 'pe-7s-note2',
						nome: 'Consultas'
					},				
					{
						rota: 'pagamentos',
						icone: 'pe-7s-credit',
						nome: 'Financeiro'
					}
				]
			}			
			if(self.permissao.tipo == 2){
				self.menu = [
					{
						rota: 'inicio',
						icone: 'pe-7s-graph',
						nome: 'Inicio'
					},				
					{
						rota: 'usuario',
						icone: 'pe-7s-user',
						nome: 'Usuários'
					},				
					{
						rota: 'consultas',
						icone: 'pe-7s-note2',
						nome: 'Consultas'
					}				
				]
			}			
			if(self.permissao.tipo == 1){
				self.menu = [
					{
						rota: 'inicio',
						icone: 'pe-7s-graph',
						nome: 'Inicio'
					}								
				]
			}
		}
	})
();
