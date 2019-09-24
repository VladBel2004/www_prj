<?php
$connet = new mysqli("127.0.0.1", "uMg", "123", "vlad");
if ($connet->connect_error) {die($connet->connect_error);
}
echo "1234";
$qu  = "select * from cvc";
$res = $connet->query($qu);
if (!$res) {die($connet->error);
}
echo "<br>1234<br>";
$rows = $res->num_rows;
for ($j = 0; $j < $rows; ++$j) {
	$res->data_seek($j);
	echo 'COUNT: '.$res->fetch_assoc()['count']."<br>";
	$res->data_seek($j);
	echo 'VAL: '.$res->fetch_assoc()['val']."<br><br>";
}
$res->close();
$connet->close();
echo "1234";
echo "<br><br><br>";
if (isset($_POST['hhh'])) {$var = varHTML($_POST['hhh']);echo $var;}//varHTML($_POST['hhh'])
echo <<<_END
<form action="1234.php" method="post"><pre>
    INPUT: <input type="text" name="hhh">
           <input type="submit" value="RELOAD">
  </pre></form>
_END
;

echo hash('ripemd128', "1234");
function varHTML($var) {
	$var = stripslashes($var);
	$var = htmlentities($var);
	$var = strip_tags($var);
	return $var;
}
function vatMySQL($connect, $var) {
	$var = $connect->real_escape_string($var);
	$var = varHTML($var);
	return $var;
}
?>