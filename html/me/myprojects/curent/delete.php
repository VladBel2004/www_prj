<?php
  $connect=new mysqli("127.0.0.1", "uMg","123", "vlad");
  $qu="DELETE FROM books WHERE id=".$_POST['ii'];
  $connect->query($qu);