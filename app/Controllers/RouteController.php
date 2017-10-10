<?php
	
	class RouteController extends Controller{
		/**
		 *	Rota Inicial
		 *	@var defaultTemplate [String]
		 */
		private static $defaultTemplate = 'inicio';
		private static $currentTemplate;
		/**
		 *	Função de rota [ Pasta = pages ]
		 *	@return void
		 */
		public static function setDefault(){
			$loader = new php_Loader_Filesystem('./modules/views/');
			$php = new php_Environment($loader);

			if(isset($_GET['pg'])){
				$get = !is_null($_GET['pg']) ? $_GET['pg'] : self::$defaultTemplate;
			}else{
				$get = self::$defaultTemplate;
			}
			$paths = explode('/' , $get);
			$path = $paths[0];
			self::$currentTemplate = $path;

			if(file_exists('./modules/views/' . $path .'.php')){
				echo $php->render($path.'.php', ['teste'=>'ok']);
			}else{
				return include('./modules/views/404.php');
			}

		}
		
		public static function getPath(){
			if(isset($_GET['pg'])){
				$get = !is_null($_GET['pg']) ? $_GET['pg'] : self::$defaultTemplate;
			}else{
				$get = self::$defaultTemplate;
			}
			$paths = explode('/' , $get);
			$path = $paths[0];

			return $path;
			var_dump(self::$currentTemplate);
		}
	}