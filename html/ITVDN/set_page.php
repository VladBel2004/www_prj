<?php

	require_once "page.php";

	$data = "";

	if(isset($_POST['arg']))
	{
		$data = $_POST['arg'];
	}

	set_page($data);

?>