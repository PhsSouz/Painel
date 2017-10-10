(function(){
  	'use strict';

	angular
		.module('myApp')
	    .controller	('consultasController',	Controller)

	function Controller($scope, $http, $httpParamSerializer, $localStorage, EmbalagemService, $state) {
		var self 				= 	this
		self.deletar 			= 	deletar
		self.showEmbalagem 		=	showEmbalagem
		self.editar 			= 	editar
		self.showCreateEmbalagem =	showCreateEmbalagem
		self.pegaTipo			=	pegaTipo
		self.showIndex			=	showIndex
		self.listarTipo			=	listarTipo
		
		function showIndex(embalagem) {
			$state.go('embalagens-list',{id:embalagem})	
		}

		function listarTipo() {
			self.idEmbalagem = $state.params.id
			EmbalagemService.index($state.params.id)
				.then(function(response){
					self.embalagens = response.data
				}
			)

		}

		function deletar(index,id,imagem){
			self.embalagens.splice(index, 1)
			EmbalagemService.destroy(id,imagem)
				.then(function(response){
					console.log(response.data)
				}
			)
		}

		function showCreateEmbalagem(id){	
			$state.go('consulta-create',{id:id})
			$localStorage.idEmbalagem = id
		}

		function pegaTipo(id){
			self.tipo = $localStorage.idEmbalagem
		}

		function showEmbalagem(id){
			$state.go('embalagens-edit',{id:id})
		}

		function editar(){
			EmbalagemService.edit($state.params.id)
				.then(function(response){
					self.noticiasEdit = response.data
				}
			)
		}
	}
})();