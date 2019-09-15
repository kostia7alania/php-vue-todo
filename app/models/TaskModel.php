<?php

/**
 * TaskModel
 */
class TaskModel extends Model {

	/** 
	 * @var string
	 */
	protected static $tableName = 'tasks';

	/**
 	 * @return array
	 * @todo  
	 */
	/*public static function getAllFromInnerJoinWithUsers() {
		$tasks = sprintf('`%s`', self::getTableName());
		$users = sprintf('`%s`', UserModel::getTableName());

		 
		$sql = <<<END
		SELECT $tasks.*, $users.`first_name`, $users.`last_name`
		FROM $tasks INNER JOIN $users
		ON $tasks.`user_id` = $users.`id`;
END;

		$pst = Database::getInstance()->prepare($sql);
		$pst->execute();

		return $pst->fetchAll();
	}
*/
	public static function getAllFromInnerJoin() {
		$tasks = sprintf('`%s`', self::getTableName());
		$sql = <<<END
		SELECT $tasks.*	FROM $tasks
END;

		$pst = Database::getInstance()->prepare($sql);
		$pst->execute();

		return $pst->fetchAll();
	}

}
