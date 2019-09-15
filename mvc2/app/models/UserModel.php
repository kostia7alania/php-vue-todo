<?php

/**
 * UserModel
 */
class UserModel extends Model {

	/**
	 * Назив табеле
	 * @var string
	 */
	protected static $tableName = 'users';

	/**
	 * Аутентификација корисника коришћењем е-поште и лозинке
	 * @param string $username
	 * @param string $password Хеш-вредност корисничке лозинке
	 * @return object
	 */
	public static function getByUsernameAndPassword($username, $password) {
		$tableName = '`' . self::$tableName . '`';
		$tableName = sprintf('`%s`', self::$tableName);

		$sql = "SELECT * FROM $tableName WHERE `username` = ? AND `password` = ? LIMIT 1;";
		$pst = Database::getInstance()->prepare($sql);
		$pst->bindValue(1, $username, PDO::PARAM_STR);
		$pst->bindValue(2, $password, PDO::PARAM_STR);
		$pst->execute();

		return $pst->fetch();
	}

}
