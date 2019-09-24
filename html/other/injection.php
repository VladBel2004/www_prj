<?php
  $conn = new mysqli("localhost", "ss", "bl547694", "sosyal");
  if($conn->connect_error)die($conn->connect_error);

  $user = $conn->real_escape_string($_GET['id']);

  $qu = "SELECT * FROM ff WHERE incr = '".$user."'";

  $_GET['title'] = "Vlad";

  if(isset($_GET[id])){
  	echo "<p>$qu</p>";
  	$res = $conn->query($qu);
  	if(!$res)die($res->error);
  	else{
  		for($t = 0; $t < $res->num_rows; $t++){
  			$row = $res->fetch_array(MYSQLI_NUM);
        echo <<<_END
        <p>
         <pre>
           F: <small>$row[0]</small>
           S: <small>$row[1]</small>
           I: <small>$row[2]</small>
         </pre>
        </p>
_END;
  		}
  	}
  }
  if(isset($_GET['create'])){
  	$cr = $_GET['create'];
  	$qu = "CREATE TABLE ".$cr."(vv varchar(20), intr int, tite varchar(20))engine MyISAM";
  	$res = $conn->query($qu);
    if(!$res)die($res-error);
  }
  echo "<p><form action= 'injection.php' method='GET'>
     <input type='text' value='rree' hidden='' name='create'>
     <input type='submit' value='create'>
  </p>"
?>

