<div ng-controller="painelController as ctrl">
    <nav class="navbar navbar-default navbar-fixed">
        <div class="container-fluid">
            <div class="header">
                <a ng-click="ctrl.deslogar()" class="btn btn-info btn-fill pull-right">
                    Sair
                </a>
            </div>
            <div class="header">
                <h4 class="title">Bem vindo, {{ ctrl.nome }}</h4>
            </div>
        </div>
    </nav>
</div>
