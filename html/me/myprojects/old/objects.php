<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

<?php
$object = new User;
print_r($object);
echo "<br>";
$object->I = "Vald";
print_r($object);
echo "<br>";
$obj    = clone$object;
$obj->I = "Dima";
print_r($obj);
$oob = new User("vald", "dima");
echo "<br>".$object->I."<br>";
echo $object->getIt()."<br>";
User::setIt();
$us = new Us;
echo "<br>";
print_r($us);
$us->test();
echo "<br>".date("l F jS, Y - G:ia");

class User {
	public $r;//private, protected
	static $III = 33;
	public $I   = 55;
	function __construct($a, $b) {
		echo "$a is brother $b";
	}
	function getIt() {
		echo $this->I;
		echo "Vald is famous haker";
	}
	static function setIt() {
		echo "setIt";
		echo self::$III."<br>";
	}
}
class Us extends User {
	public $pp = 33;
	function test() {
		echo $this->I."<br>".$this->pp;
		echo "<br>";
		parent::setIt();
	}
}
?>