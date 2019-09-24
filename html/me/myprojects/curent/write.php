<?php
 $connect=new mysqli("localhost", "uMg", "123", "vlad");
 $res=$connect->query("SELECT * FROM books ORDER BY id DESC");
 $books=array();
 $rows=$res->num_rows;
 for($q=0; $q<$rows; $q++){
 	 $row = $res->fetch_array(MYSQLI_ASSOC);
 	 $books[]=$row;
 }
 $connect->close();
 $books=array_reverse($books);
 echo json_encode($books);
?>