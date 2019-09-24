<?php
  require_once "pass.php";
  $conn = new mysqli($host, $user, $pass, $db);
  if($conn->connect_error)die($conn->connect_error);

  $name = "";
  $suname = "";
  $phone = "";
  $passw = "";
  $passwS = "";
  $email = "";

  $emaill = "";
  $passwl = "";
  
  if(isset($_POST['rr'])){
  	if($_POST['rr']=="aa"){
  		if(isset($_POST['name'])==true&&isset($_POST['suname'])==true&&isset($_POST['phone'])==true&&isset($_POST['passw'])==true&&isset($_POST['email'])==true&&isset($_POST['passwS'])==true){
  		$name = varningMySQL($conn, $_POST['name']);
  		$suname = varningMySQL($conn, $_POST['suname']);
  		$phone = varningMySQL($conn, $_POST['phone']);
  		$passw = varningMySQL($conn, $_POST['passw']);
  		$passwS = varningMySQL($conn, $_POST['passwS']);
		  $email = varningMySQL($conn, $_POST['email']);

  		$nameL = false;
  		$sunameL = false;
  		$phoneL = false;
  		$passwL = false;
  		$emailL = false;
  		$canL = false;

  		if(preg_match("/[A-zA-zа-яА-Я]{4,20}/", $name)&&!(preg_match("/[0-9\!\@\#\$\%\^\&\*\(\)\.\>\<\,\:\;\"\'\s\t]+/", $name))&&$name!=$suname){
  			$nameL = true;
  		}
  		else {
  			$nameL = false;
  		}
  		if(preg_match("/[A-zA-zа-яА-Я]{4,20}/", $suname)&&!(preg_match("/[0-9\!\@\#\$\%\^\&\*\(\)\.\>\<\,\:\;\"\'\s\t]+/", $suname))&&$name!=$suname){
  			$sunameL = true;
  		}
  		else {
  			$sunameL = false;
  		}
  		if(!(preg_match("/[A-zA-zа-яА-Я\)\(\!\@\#\$\%\^\&\*\{\}\'\"\:\:]+/", $phone))){
         if(preg_match("/[0-9]{11,13}/", $phone)&&preg_match("/^8|^7/", $phone)&&!(preg_match("/[0-9]{13,200}/", $phone))){
         	$phoneL = true;
         }
         else {
         	$phoneL = false;
         }
  		}
  		else {
  			$phone = false;
  		}
  		if(preg_match("/[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/", $email)&&!(preg_match("/[\s\t]+/", $email))){
  			$emailL = true;
  		}
  		else {
  			$emailL = false;
  		}
  		if($passw == $passwS){
  			$passwL = true;
  		}
  		else {
  			$passwL = false;
  		}

  		$quu = "SELECT * FROM login WHERE name = '$name' OR suname = '$suname' OR email = '$email'";
  		$ress = $conn->query($quu);
  		if($ress->num_rows==0){
  			$canL = true;
  		}
  		else{
  			$canL = false;
  		}

      if($nameL&&$sunameL&&$emailL&&$phoneL&&$passwL){
      	if($canL){
      		$qu = "INSERT INTO login VALUES('$name', '$passw', '$email', '$suname', '$phone')";
          $res = $conn->query($qu);
          if(!$res)die($conn->error);
          else echo "true";
      	}
        else {
        	echo "err";
        }
      }
      else {
      	echo "false";
      }
  	}

  	}
  	elseif($_POST['rr']=="ee"){
  		if(isset($_POST['emaill'])&&isset($_POST['passl'])){
  			
  			$emaill = varningMySQL($conn, $_POST['emaill']);
  			$passwl = varningMySQL($conn, $_POST['passl']);

  			$emaillL = false;

  			if(preg_match("/[a-zA-Z0-9\.\-_]+@[a-z]+\.[a-z]{2,6}/", $emaill)&&!(preg_match("/[\s\t]+/", $emaill))){
  				$emaillL = true;
  			}
  			else{
  				$emaillL = false;
  			}
  			if($emaillL){
          
           $que = "SELECT * FROM login WHERE email = '$emaill'";
           $resu = $conn->query($que);
           if(!$resu)die($conn->error);
           elseif($resu->num_rows){
           	$row = $resu->fetch_array(MYSQLI_NUM);
           	$resu->close();
           	if($passwl == $row[1]){
           		//echo "yees";
              setcookie("email", $emaill, time()+60, '/');
              setcookie("passw", $passwl, time()+60, '/');
              session_start();
              $_SESSION['email'] = $email;
              $_SESSION['passw'] = $passwl;
              echo "http";

           	}
           	else{echo "no";}
           }
		 else{echo "no";}

  			}
  			else{

  			}
  		}
  		else {

  		}

  	}
  	else echo '1';
  }

  function varningHTML($var){
  $var=stripslashes($var);
  //$var=htmlentities($var);
  $var=  strip_tags($var);
  return $var;
}
  function varningMySQL($connect,$var){
  $var=$connect->real_escape_string($var);
  $var=varningHTML($var);
  return $var;
}
?>