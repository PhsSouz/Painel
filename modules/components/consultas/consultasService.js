(function(){

	'use strict'

	let path = 'Controller.php'

	angular
		.module('myApp').factory('EmbalagemService', function($http){
		  	return {
				destroy: function(data,imagem){
					return $http({
						method: 'POST',
						url: 'api/controllers/consulta/drop/'+path,
						data: {id: data, imagem:imagem}
					})
				},
			    edit : function(id){
					return $http({
						method: 'POST',
						url: 'api/controllers/consulta/edit/'+path,
						data: id
					})
			    },			    
			    index : function(data){
					return $http({
						method: 'POST',
						url: 'api/controllers/consulta/list/'+path,
						data: data
					})
			    },
		   	}
		})
	}
)();
