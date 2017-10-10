(function(){

	'use strict'

	angular
		.module('myApp')
		.factory('ValidateLogin', function($http, Validation){
		  	return {
				validacao: function Token(){
					if(_.isEmpty(window.localStorage.getItem('Token')) == true){
						swal("Ops!", "Entre com seu usuário para ter acesso ao sistema!")
							.then((value) => {
								window.location.assign("http://localhost/github/Painel/")
							}
						);
					}
				},
				getLogin: function(response){
					window.localStorage.setItem("Id", 			response.data[0].id)
					window.localStorage.setItem("Nome", 		response.data[0].nome)
					window.localStorage.setItem("Sobrenome", 	response.data[0].sobrenome)
					window.localStorage.setItem("Email", 		response.data[0].email)
					window.localStorage.setItem("Endereco", 	response.data[0].endereco)
					window.localStorage.setItem("Rg", 			response.data[0].rg)
					window.localStorage.setItem("Senha", 		response.data[0].senha)
					window.localStorage.setItem("Tipo", 		response.data[0].tipo)
					window.localStorage.setItem("Token", 		Validation.Token)
				},
				deleteLogin: function(){
					window.localStorage.removeItem("Id")
					window.localStorage.removeItem("Nome")
					window.localStorage.removeItem("Sobrenome")
					window.localStorage.removeItem("Email")
					window.localStorage.removeItem("Endereco")
					window.localStorage.removeItem("Rg")
					window.localStorage.removeItem("Senha")
					window.localStorage.removeItem("Tipo")
					window.localStorage.removeItem("Token")
				}				
		   	}
		})
	}
)();
