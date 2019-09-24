<?php

	require "default_page.php";
	require "make.php";
	require "database.php";

	function set_page($arg)
	{
		require "other.php";
		if($arg == "default_page")
		{
			setcookie("cookie_itvdn", "default_page", time() + $_time);
		}
		else
		{
			if(!isset($array[$arg]))
			{
				setcookie('cookie_itvdn', $arg, time() + $_time);
			}
		}
	}

	function get_page()
	{
		if($_COOKIE['cookie_itvdn'] == "default_page")
		{
			return file_get_contents('./html/default_page.html');
		}
		else
		{
			return make_html();
		}
	}

?>