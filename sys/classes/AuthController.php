<?php

abstract class AuthController extends Controller {

	/**
	 * @return void
	 */
	final public function __pre() {
		if (empty(Session::get(Config::USER_COOKIE))) {
			// Redirect::to('login');
			header('is_admin: false');
		}
	}

}
