<?php require('./app/bootstrap.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="pt-br" xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/png" href="assets/img/icone.png"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>Painel - Dentista</title>
		<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport'/>
	    <meta name="viewport" content="width=device-width" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
	    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
	    <link href="assets/css/animate.min.css" rel="stylesheet"/>
	    <link href="assets/css/light-bootstrap-dashboard.css" rel="stylesheet"/>
	    <link href="assets/css/demo.css" rel="stylesheet" />
	    <link href="assets/css/pe-icon-7-stroke.css" rel="stylesheet" />
		<script src="assets/js/app.js"></script>
	</head>
	<body ng-app="myApp" ng-controller="controlerModule as ctrl">
		<div class="wrapper">
		    <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-5.pNg">
		    	<div class="sidebar-wrapper" style="background-color: rgba(43, 172, 224, 0.1)">
		    		<img src="assets/img/icone.png" style="margin-left: 35%;width:30%;position: absolute;border-radius: 100%"><br><br><br><br>
		            <div class="logo">
		                <a href="http://www.creative-tim.com" class="simple-text">
		                    Dentista
		                </a>
		            </div>
		            <ul class="nav">
						<ul class="nav" ng-repeat="item in ctrl.menu">
							<li>
						        <a ui-sref="{{ item.rota }}">
						            <i class="{{ item.icone }}"></i>
						            <p>{{ item.nome }}</p>
						        </a>
						    </li>					    
						</ul> 
		            </ul>
		    	</div>
		    </div>

		    <div class="main-panel">
		        <div class="content">
					<ui-view></ui-view>
		        </div>
		    </div>
		</div>
	</body>
	<!-- Scripts -->
    <script src="assets/js/jquery-1.10.2.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/bootstrap-checkbox-radio-switch.js"></script>
    <script src="assets/js/bootstrap-notify.js"></script>
	<script src="assets/js/light-bootstrap-dashboard.js"></script>
	<script src="assets/js/demo.js"></script>
</html>
