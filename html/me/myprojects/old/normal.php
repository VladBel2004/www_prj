<?php
echo "1234";
session_start();
if (isset($_SESSION['user'])) {echo "us";
	setcookie('userf', "vlad", time()-120, '/');
	echo "<a href='connect.php'>Click</a>";
}
session_destroy();
?>