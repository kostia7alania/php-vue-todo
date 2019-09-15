<?php

/**
 * HomeController
 */
class HomeController extends Controller {

	/**
	 * @return void
	 */
	public function index() {
		$this->set('title', 'Home'); 
		$user = UserModel::getById(Session::get(Config::USER_COOKIE));
		if ($user) {
			$this->set('user', TaskController::formatFirstAndLastName($user->first_name, $user->last_name));
		} else {
			$this->set('user', false);
		}
	}

	/**
	 *  /login/
	 * @return void
	 */
	public function login() {
		$this->set('title', 'Log in');

		// HTTP метода
		if (!Http::isPost()) {
			if (!empty(Session::get(Config::USER_COOKIE))) {
				Redirect::to('');
			}
			return;
		}

		//  из HTTP POST  
		$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_EMAIL);
		$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

		if (empty($username) || empty($password) || strlen($username) > 255) {
			http_response_code(401);
			exit('Wrong data');
			return $this->set('message', 'Error #1!');
		}

		//   валидација  
		if (!filter_var($username, FILTER_SANITIZE_STRING)) {
			http_response_code(401);
			exit('Wrong data');
			return $this->set('message', 'Error #2!');
		}

		$password = Crypto::sha512($password, true); 
		$user = UserModel::getByUsernameAndPassword($username, $password);
		if ($user) {
			Session::set(Config::USER_COOKIE, intval($user->id));
			exit(json_encode($user));
			//Session::set(Config::USER_COOKIE, intval($user->is_admin));
			//Redirect::to('');
		} else {
			echo 'User or password is wrong';
			exit(http_response_code(401));
			sleep(2);
			return $this->set('message', 'Error #3!');
		}
	}

	/**
	 * /logout/
	 * @return void
	 */
	public function logout() {
		Session::end(); 
		Redirect::to('');
	}

	/**
	 *  HTTP 404 Not Found
	 * @return void
	 */
	public function e404() {
		http_response_code(404);
		ob_clean();
		die('HTTP: 404 not found.');
	}
}
