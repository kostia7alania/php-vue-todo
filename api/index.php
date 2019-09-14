<?
// Always start this first
session_start();

if ( ! empty( $_POST ) ) {
    if ( isset( $_POST['username'] ) && isset( $_POST['password'] ) ) {
        // Getting submitted user data from database
        $host = "localhost"; 
        $user = "citypark_test"; 
        $password = "Fire7fox22!"; 
        $dbname = "citypark_todo"; 
        $con = new mysqli($host, $user, $password, $dbname);
        var_dump($con);
        die;
        $stmt = $con->prepare("SELECT * FROM users WHERE login = ?");
        $stmt->bind_param('s', $_POST['username']);
        $stmt->execute();
        $result = $stmt->get_result();
    	$user = $result->fetch_object();
        // Verify user password and set $_SESSION
        var_dump($user);
        die;
    	if ( password_verify( $_POST['password'], $user->password ) ) {
    		$_SESSION['user_id'] = $user->ID;
    	}
    } else echo 'user and pass is req.!.';
    die;
}
?>

<form action="" method="post">
    <input type="text" name="username" placeholder="Enter your username" required>
    <input type="password" name="password" placeholder="Enter your password" required>
    <input type="submit" value="Submit">
</form>

