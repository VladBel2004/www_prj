<?php
$fn   = fopen("/home/vladIS/vlad.txt", 'w');
$text = <<<_END
vald is good boy
  he is good haker
_END

;

fwrite($fn, $text) or die("<br>Error");
fclose($fn);
$fn   = fopen("/home/vladIS/vlad.txt", 'r');
$line = fread($fn, 10) or die("Error");
fclose($fn);
echo $line;

$fh   = fopen("/home/vladIS/vlad.txt", 'r') or die("<br>shet");
$v[0] = " " or die("<br>"."vald");
for ($i = 1; $i < 2; $i++) {
	$v[$i] = fgets($fh);
	fseek($fh, 0, SEEK_END);
}
fclose($fh);
for ($r = 1; $r < 2; $r++) {
	echo "<br>".$v[$r];
}
$fh   = fopen("/home/vladIS/vlad.txt", 'r');
$line = fgets($fh);
fclose($fh);
echo "<br>".$line;
echo "<br><br><br>";

?>