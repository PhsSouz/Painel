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
						swal({
							title: "Usuário cadastrado com sucesso!",
							text: "Clique em Ok para continuar!",
							icon: "success",
							button: "Ok!",
						}).then((value) => {
							$state.go('usuario')
						})
					}
				}
			)
		}

		function deletar(index,id){
			UsuarioService.destroy(id)
				.then(function(response){
					if(response.data == 200){
						self.usuarios.splice(index, 1)
						swal({
							title: "Deseja deletar esse Usuário?",
							text: "Essa operação não pode ser desfeita!",
							icon: "warning",
							buttons: true,
							dangerMode: true,
						})
						.then((willDelete) => {
						  	if(willDelete) {
						    	swal("Usuário deletado com sucesso!", {
						      		icon: "success", 
						    	})
						  	}
						})
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
					if(response.data == 200){
						swal({
							title: "Usuário editado com sucesso!",
							text: "Clique em Ok para continuar!",
							icon: "success",
							button: "Ok!",
						}).then((value) => {
							$state.go('usuario')
						})
					}
				}
			)
		}
	}
})();