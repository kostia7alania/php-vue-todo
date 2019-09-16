<?php

/**
 * TaskController
 */
class TaskController extends AuthController {

	/**
	 * /tasks/
	 * @return void
	 */
	public function index() {
		//$this->set('title', 'Tasks');
		$tasks = TaskModel::getAllFromInnerJoin();
		/*foreach ($tasks as $task) {
			$task->created_at = Utils::formatDateAndTime($task->created_at);
			$task->updated_at = Utils::formatDateAndTime($task->updated_at);
			//$task->user = $this->formatFirstAndLastName($task->first_name, $task->last_name);
		}*/
		//$this->set('tasks', $tasks);
		header('Content-Type: application/json');
		exit(json_encode($tasks));
	}

	/**
	 * /tasks/create/
	 * @return void
	 */
	public function create() {
		$this->set('title', 'Add task');
		if (!Http::isPost()) return;
		$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
		$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
		$description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);
		
		if (empty($name) || empty($email) || empty($description)) {
			exit(http_response_code(400));
			// return $this->set('message', 'Error #1!');
		}

		// Нормализација
		//$userId = intval(Session::get(Config::USER_COOKIE));
		$name = trim($name);
		$email = trim($email);
		$description = trim($description);

		// запись в БД
		$arr = [
			//'user_id' => $userId,
			'name' => $name,
			'email' => $email,
			'description' => $description,
			'is_completed'=> ''
		];
		$task = TaskModel::create($arr);
		if (!$task) {
			exit(http_response_code(403));
			//return $this->set('message', 'Error #2!');
		}

		var_dump($arr);
		exit(http_response_code(201));
		//Redirect::to('tasks');
	}

	/**
	 * /tasks/update/$id
	 * @param int $id ID-параметр
	 * @return void
	 */
	public function update($id) {
		if(!Session::get(Config::USER_COOKIE)) {
			http_response_code(401);
			exit('Unauthorized');
		}

		$this->set('title', 'Update task');

		if (!Http::isPost()) {
			return $this->setTask($id);
		}
 
		$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
		$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
		$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
		$description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);
		$is_completed = filter_input(INPUT_POST, 'is_completed', FILTER_VALIDATE_BOOLEAN);

		if (empty($id) || empty($name) || empty($email) || empty($description)) {
			exit(http_response_code(400));
			// return $this->set('message', 'Error #1!');$this->setTask($id);
		}
		//$userId = intval(Session::get(Config::USER_COOKIE));
		$name = trim($name);
		$email = trim($email);
		$description = trim($description);
		$arr = [
			//'user_id' => $userId,
			'name' => $name,
			'email' => $email,
			'description' => $description,
			'is_completed'=> $is_completed?'1':''
		];
		$status = TaskModel::update($id, $arr);

		if (!$status) {
			exit(http_response_code(403));
			// return $this->set('message', 'Error #2!');$this->setTask($id);
		}
		var_dump($arr);
		exit(http_response_code(201));
		// Redirect::to('tasks');
	}

	/**
	 * /tasks/delete/$id
	 * @param int $id ID параметар
	 * @return void
	 */
	public function delete($id) {
		if(!Session::get(Config::USER_COOKIE))  { 
			http_response_code(401);
			exit('Unauthorized');
		}
		TaskModel::delete($id);
		exit(http_response_code(201));
		//Redirect::to('tasks');
	}

	/**
	 * @param int $id ID параметар
	 * @return void
	 */
	private function setTask($id, $name = 'task') {
		$task = TaskModel::getById($id); 
		$this->set($name, $task);
	}

	/**
	 * @param string $firstName Име
	 * @param string $lastName Презиме
	 * @return string
	 */
	public static function formatFirstAndLastName($firstName, $lastName) {
		$user = trim(implode(' ', [$firstName, $lastName]));
		return $user ? $user : 'N/A';
	}

}
