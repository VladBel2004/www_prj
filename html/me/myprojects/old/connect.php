<?php
$connect = new mysqli("127.0.0.1", "uMg", "123", "vlad");
session_start();
if (isset($_SESSION['y'])) {
	echo "Worcks<a href='createFiles.php'>Click</a>";
} 
elseif (isset($_COOKIE['userf']) && isset($_COOKIE['passf'])) {
	$user = $_COOKIE['userf'];
	$pass = $_COOKIE['passf'];
	$qq   = "SELECT * FROM conn WHERE user='$user'";
	$res  = $connect->query($qq);
	if (!$res) {die($connect->error);
	} 
	elseif ($res->num_rows) {
		$row = $res->fetch_array(MYSQLI_NUM);
		$res->close();
		if ($row[1] == $pass) {echo "1234<a href='createFiles.php'>Click</a>";} else {//echo "<a href='createFiles.php'>Click</a>"
			echo "4321";
		}
	} 
	else {
		echo "error";

	}
} 
elseif (isset($_POST['user']) && isset($_POST['pass'])) {
	$user = $_POST['user'];
	$pass = $_POST['pass'];
	$qu   = "SELECT * FROM conn WHERE user='$user'";
	$res  = $connect->query($qu);
	if (!$res) {die($connect->error);
	} 
	elseif ($res->num_rows) {
		$row = $res->fetch_array(MYSQLI_NUM);
		$res->close();
		$tk = hash("ripemd128", $pass);
		if ($tk == $row[1]) {echo "yes";
			setcookie("userf", "vlad", time()+60, '/');
			setcookie("passf", $tk, time()+60, '/');
			session_start();
			$_SESSION['y'] = "Works Sesion";
			echo "<a href='createFiles.php'>Click</a>";
		} 
		else {
			die("No");
		}
	} 
	else {
		die("NOOO");
	}
} 
else {
	echo <<<_END
<form method="post" action="connect.php"><pre>
        Username: <input type="text" name="user">
        Password: <input type="password" name="pass">
                  <input type="submit" value="GO">
</pre></form>
_END

	;

}
?>