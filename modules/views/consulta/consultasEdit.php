<div ng-controller="consultasController as ctrl" data-ng-init="ctrl.editar()">
	<div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card" style="padding: 10px">
                    <div class="header">
                        <h4 class="title">Editar consulta</h4> 
                        <a ui-sref="consultas" type="submit" class="btn btn-info btn-fill pull-right">Voltar</a>
                    </div>
                    <form>
                        <consultas></consultas>                           

                        <button type="submit" class="btn btn-info btn-fill pull-left"> Editar consulta</button>
                        <div class="clearfix"></div>
                    </form>
				</div>
			</div>
		</div>
	</div>
</div>