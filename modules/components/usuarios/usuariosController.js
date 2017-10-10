(function(){
  	'use strict';

	angular
		.module('myApp')
	    .controller	('usuariosController',	Controller)

	function Controller($http, $httpParamSerializer, $state, $localStorage, UsuarioService) {
		var self 			= 	this
		self.listar 		= 	listar
		self.deletar 		= 	deletar
		self.editar 		= 	editar
		self.atualizar 		= 	atualizar
		self.showUsuario 	= 	showUsuario
		self.cadastrar 		= 	cadastrar
		self.createSuccess	=	false
		self.deleteSuccess	=	false
	
		function listar() {
			UsuarioService.index()
				.then(function(response){
					self.usuarios = response.data
				}
			)
		}

		function cadastrar(usuario) {
			UsuarioService.create(usuario)
				.then(function(response){
					if(response.status == 200){
						$state.go('usuario')
					}
				}
			)
		}

		function deletar(index,id){
			self.usuarios.splice(index, 1)
			UsuarioService.destroy(id)
				.then(function(response){
					if(response.data == 200){
						console.log('deletado')
					}
				}
			)
		}

		function showUsuario(usuario){
			$state.go('usuario-edit',{id:usuario})
		}

		function editar(){
			UsuarioService.edit($state.params.id)
				.then(function(response){
					self.usuarioEdit = response.data
				}
			)
		}

		function atualizar(usuario){
			UsuarioService.update(usuario)
				.then(function(response){
					self.usuarioEdit = response.data
				}
			)
			$state.go('usuario')
		}
	}
})();