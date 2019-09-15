<?php
 
abstract class ApiController extends Controller {

	/**
	 * @return void
	 */
	final public function __pre() {
		if (empty(Session::get(Config::USER_COOKIE))) {
			http_response_code(403);
			ob_clean();
			die('HTTP: 403 forbidden.');
		}
	}

	/**
	 * @return void
	 */
	final public function __post() {
		ob_clean();
		Http::setJsonHeaders();
		echo json_encode($this->getData(), JSON_UNESCAPED_UNICODE);
		die;
	}

}
