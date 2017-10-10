<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Login</title>
		<link rel="icon" type="image/png" href="assets/img/icone.png"/>
		<link rel="stylesheet" type="text/css" href="assets/login/styles/login.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<script src="assets/js/app.js"></script>
	</head>
	<body>
		<div class="body-login" ng-app="myApp"  ng-controller="loginController as ctrl">
			<div class="container">
				<img src="assets/img/icone.png">
				<form>
					<input type="hidden" value="login.php" id="acesso">
					<div class="form-input">
						<input type="text" name="login" placeholder="Email" ng-model="ctrl.login.email"><br>
					</div>
					<div class="form-input">
						<input type="password" name="login" placeholder="senha" ng-model="ctrl.login.senha">
					</div>
					<div class="error" style="color: #fff" ng-if="ctrl.alert">
						<p>Email ou senha incorretos!</p>
					</div>
					<input type="submit" name="" value="ENTRAR" class="btn-login" ng-click="ctrl.logar(ctrl.login)" style="outline:none">
				</form>
			</div>
		</div>
	</body>
</html>