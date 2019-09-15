<?
$host = "185.211.244.128"; 
$db_user = "citypark_test"; 
$db_pass = "Fire7fox22!"; 
$db_name = "citypark_todo"; 

//$con = new mysqli($host, $user, $password, $dbname);
//$stmt = $con->prepare("SELECT * FROM `Users` WHERE login = 'kostia7alania'");
//$stmt->bind_param('s', 'kostia7alania');

$db = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $db_user, $db_pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);