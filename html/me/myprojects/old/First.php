<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
<?php
function firstt($word) {

	echo "<br>it's function!<br> $word";
}
function math($x, $y, $s) {
	if ($s == "*") {
		return $x*$y;
	} elseif ($s == "/") {
		return $x/$y;
	} elseif ($s == "-") {
		return $x-$y;
	} elseif ($s == "+") {
		return $x+$y;
	} else {
		echo "Метод заполнен некоректно!";
	}
}
function truns($a, $b, $c){
	$a= ucfirst(strtolower($a));
	$b= ucfirst(strtolower($b));
	$c= ucfirst(strtolower($c));
	return $a." ".$b." ".$c;
   
}
echo "Hello World<br>";
$num = 333;
$mmm = 22;
$mmm = $num+$mmm;
echo $mmm;
define("MyConstV", "Vlad");
echo MyConstV;
firstt(eee);
$sum = math(3, 4, "+");
echo "<br>"."$sum";
$rr = 44;
$rr /= 22;
echo "<br>".$rr;
echo "<br>"."<br>".__LINE__;
echo truns("ValD". "IS". FamousHaker);
?>