require('./lib/angular.js')
require('./lib/ui-router.js')
require('./lib/storage.js')
require('./lib/pagination/dirPagination.js')
require('satellizer')

require('./app.modules.js')

require('./app.routes.js')

//API
require ('./components/apiService.js')

// Painel
require ('./components/painel/painelController.js')

//Consultas
require ('./components/consultas/consultasController.js')
require ('./components/consultas/consultasService.js')
require ('./shared/consultas/consultasDirective.js')

//Financeiro
require ('./components/financeiro/financeiroController.js')
require ('./components/financeiro/financeiroService.js')
require ('./shared/pagamentos/pagamentosDirective.js')


//Login
require ('./components/login/loginController.js')
require ('./components/login/loginService.js')

//Usuarios
require ('./components/usuarios/usuariosController.js')
require ('./components/usuarios/usuariosService.js')
require ('./shared/usuarios/usuariosDirective.js')




