<?php
$connect= new mysqli("localhost", "uMg", "123", "vlad");
$author=varningMySQL($connect, $_POST['author']);
$book=varningMySQL($connect, $_POST['book']);
$title=varningMySQL($connect, $_POST['title']);
$year=varningMySQL($connect, $_POST['year']);
$qa="INSERT INTO books(author, book, title, year) VALUES ('".$author."', '".$book."', '".$title."', ".$year.")";
$connect->query($qa);
//echo "Ok";
function varningHTML($var){
  $var=stripslashes($var);
  //$var=htmlentities($var);
  $var=  strip_tags($var);
  return $var;
}
function varningMySQL($connect, $var){
  $var=$connect->real_escape_string($var);
  $var=varningHTML($var);
  return $var;
}
?>