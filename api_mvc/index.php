<?php
echo 1232;
die;
header('Access-Control-Allow-Origin: *');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
	header('Access-Control-Allow-Headers: token, Content-Type');
	header('Access-Control-Max-Age: 1728000');
	header('Content-Length: 0');
	header('Content-Type: text/plain');
	die();
}
require_once './sys/autoload.php';
error_reporting(0);

Session::begin();

$request = Http::getRequestedPath();
$routes = require_once './routes.php';

$args = $foundRoute = null;
foreach ($routes as $route) {
	if ($route->isMatched($request, $args)) {
		$foundRoute = $route;
		break;
	}
}


$className = $foundRoute->getController() . 'Controller';
$worker = new $className;

if (method_exists($worker, '__pre')) {
	call_user_func([$worker, '__pre']);
}

if (!method_exists($worker, $foundRoute->getMethod())) {
	ob_clean();
	die('CONTROLLER: Method not found.');
}

$methodName = $foundRoute->getMethod();
call_user_func_array([$worker, $methodName], $args);

if (method_exists($worker, '__post')) {
	call_user_func([$worker, '__post']);
}

$DATA = $worker->getData();

$headerView = './app/views/_global/header.php';
$footerView = './app/views/_global/footer.php';
$view = './app/views/' . $foundRoute->getController() . '/' . $foundRoute->getMethod() . '.php';

if (!file_exists($headerView)) {
	ob_clean();
	die('VIEW: Header file not found.');
}

if (!file_exists($view)) {
	ob_clean();
	die('VIEW: Main template file not found.');
}

if (!file_exists($footerView)) {
	ob_clean();
	die('VIEW: Footer file not found.');
}

$jsModule = sprintf('assets/js/modules/%s_%s.js', $foundRoute->getController(), $foundRoute->getMethod());
if (file_exists($jsModule)) {
	$DATA['JAVASCRIPT_MODULE'] = $jsModule;
}

require_once $headerView;
require_once $view;
require_once $footerView;
