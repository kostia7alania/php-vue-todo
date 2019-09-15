<?php
require_once('middlewars/cors.php');

//http_response_code(300);exit('stop');
/* 
 $host = "185.211.244.128"; 
 $user = "citypark_test"; 
 $password = "Fire7fox22!"; 
 $dbname = "citypark_todo"; 
 $con = new mysqli($host, $user, $password, $dbname);
 $stmt = $con->prepare("SELECT * FROM `Users` WHERE login = 'kostia7alania'");
 //$stmt->bind_param('s', 'kostia7alania');
 $stmt->execute();
 $result = $stmt->get_result();
 $user = $result->fetch_object();
 echo $user->isadmin ? 'admin' : 'no admin.!.'; 
 die;
*/
//echo strlen(password_hash("test", PASSWORD_BCRYPT, ["cost" => 10])); die;

// Always start this first
session_start();
error_reporting(E_ERROR | E_PARSE);
 
if ( ! empty( $_POST ) ) {
    if ( isset( $_POST['username'] ) && isset( $_POST['password'] ) ) {
        // Getting submitted user data from database
        $host = "185.211.244.128"; 
        $user = "citypark_test"; 
        $password = "Fire7fox22!"; 
        $dbname = "citypark_todo"; 
        $con = new mysqli($host, $user, $password, $dbname);
        
        $usr = $_POST['username'];
        $psw = $_POST['password'];
        $sql = "SELECT * FROM `Users` WHERE login='$usr'";
        $stmt = $con->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();
    	$user = $result->fetch_object(); 
    	if ( password_verify( $psw, $user->password ) ) { // Verify user password and set $_SESSION
    		$_SESSION['login'] = $user->login;
        }
        var_dump( $_SESSION );
    } else echo 'user and pass is req.!.';
    die;
}
?>

<form action="./login-action.php" method="post">
    <input type="text" name="login" placeholder="Enter your username" required>
    <input type="password" name="password" placeholder="Enter your password" required>
    <input type="submit" value="Submit">
</form>

