<div ng-controller="usuariosController as ctrl" data-ng-init="ctrl.editar()">
	<div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="header">
                        <h4 class="title">Editar de usuário</h4> 
                    </div>
                    <div class="header">
                        <a ui-sref="usuario" class="btn btn-info btn-fill pull-right">Voltar</a>
                    </div>
                    <div class="content">
                        <usuario></usuario>
                        <button type="submit" class="btn btn-info btn-fill pull-left" ng-click="ctrl.atualizar(ctrl.usuario)">Editar usuário</button>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>