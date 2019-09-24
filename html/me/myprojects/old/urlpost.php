<?php
if (isset($_POST['url'])) {
	echo file_get_contents("http://".gggg($_POST['url']));
}
function gggg($vat) {
	$vat = strip_tags($vat);
	$vat = htmlentities($vat);
	return stripslashes($vat);
}
?>