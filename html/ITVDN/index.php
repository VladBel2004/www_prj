<?php

	require "page.php";
	require "other.php";

	if(!(isset($_COOKIE['cookie_itvdn'])))
	{
		setcookie("cookie_itvdn", "default_page", time() + $_time);
	}

	echo get_page();
?>