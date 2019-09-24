<?php

	require "other.php";

	$cookie = $_POST['cookie'];
	setcookie('cookie_itvdn', $cookie, time() + $_time);

?>