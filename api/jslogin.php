<?php
require_once ('config.php');
$_POST["login"] = 'kostia7alania';
$_POST["password"] = password_hash( "test", PASSWORD_BCRYPT, ["cost" => 10] );

if (! empty($_POST["login"]) ) {
    $login = filter_var($_POST["login"], FILTER_SANITIZE_STRING);
    $password = filter_var($_POST["password"], FILTER_SANITIZE_STRING);
    $sql = 'SELECT * FROM Users WHERE login = ?';
    $stmt_select = $db->prepare($sql);
    $result = $stmt_select->execute([$login]);
    if ($result) {
        $user = $stmt_select->fetch(PDO::FETCH_ASSOC);
        var_dump($stmt_select->fetch()); die;
        if($stmt_select->rowCount()) {
            $_SESSION['login']=$user;
            exit(1);
        }
        http_response_code(400);
        exit('Invalid Credentials');
    }
    http_response_code(500);
    exit ('There were errors while connecting to db.');
    
}
http_response_code(400);
exit ('Wrong request.');