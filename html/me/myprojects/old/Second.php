<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

<?php
echo turn("VLaD", "IS", "FamOUS", "Haker");
$fa  = "VLAd";
$obj = new Me;
print_r($obj);
echo "<br>";
$obj->trrr("vlad");
function turn($a, $b, $c, $d) {
	$dd = ucfirst(strtolower($a." ".$b." ".$c." ".$d."."."<br>"));
	return $dd;
}

class Me {
	function trrr($fa) {
		//global $fa;
		$fa = ucfirst(strtolower("VLAD"." "."GOOd"." "."Boy".".<br>"));
		echo $fa;
	}
}
?>