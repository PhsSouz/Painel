<div ng-controller="usuariosController as ctrl" data-ng-init="ctrl.listar()">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">                
                <div class="card">
                    <div class="header">
                        <a type="submit" ui-sref="usuario-create" class="btn btn-info btn-fill pull-right">Cadastrar Usuário</a>
                    </div>
                    <div class="header">
                        <h4 class="title">Usuários</h4>
                    </div>
                    <div class="content table-responsive table-full-width">
                        <div class="content">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Buscar</label>
                                        <input type="text" class="form-control" placeholder="Buscar usuários" ng-model="filter">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table class="table table-hover table-striped">
                            <thead>
                                <th>Nome</th>
                                <th>RG</th>
                                <th>Email</th>
                            </thead>
                            <tbody>
                                <tr ng-repeat="(key, item) in ctrl.usuarios | filter: filter">
                                    <td>{{item.nome}} {{item.sobrenome}}</td>
                                    <td>{{item.rg}}</td>
                                    <td>{{item.email}}</td>
                                    <td>
                                        <button class="fa-size" style="color: green;font-size:20px" ng-click="ctrl.showUsuario(item.id)">
                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                        <button class="fa-size" style="color: red;font-size:20px" ng-click="ctrl.deletar(key,item.id)">
                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>