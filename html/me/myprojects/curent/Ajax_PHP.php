<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ajax</title>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript">
      var ids=[];
      $("document").ready(function(){
           $("#sed").click(function(){
           	var dd = $("#form").serialize();
            alert(dd);
           	$.ajax({
           		url: "test.php",
              type: "POST",
              data: dd,
              beforeSend: function(){
                 //alert("before");
              },
              error: function(data){
                 //alert("error"+"\n"+data);
              },
              success: function(data){
                 //alert(data);
              }
           	});
           });
          $("#more").click(function(){
          	 getMore();
             //$("#more").hide();
             

             setInterval(function(){getMore();},5000);

             function getMore(){
                $.ajax({
                	url: "write.php",
                	type: "POST",
                	success: function(data){
                		 //alert(data);
                     data=$.parseJSON(data);
                     $.each(data, function(i, item){
                     	   if(jQuery.inArray(item.id, ids)==-1){
                          ids.push(item.id);
                         $("#cont").prepend("<p id='"+item.id+"a'><br>"+item.author+"<br>"+item.book+"<br>"+item.title+"<br>"+item.year+"<br><input type='button' value='Delete' onclick='dd("+item.id+")'><br><br>");}
                     });
                	}
                });
             }
          });
      });
      function dd(ii){
                $("#"+ii+"a").hide();
                var info= "dd=delete&ii="+ii;
                $.ajax({
                url: "delete.php",
                type: "POST",
                data: info,
                success: function(data){
                  //alert(data);
                 }
                });
             }
	</script>
  <style type="text/css">
    p{
      margin: 0;
    }
  </style>
</head>
<body>
  <form id="form">
  	<pre>
  		   Author: <input type="text" name="author">
  		   Book:   <input type="text" name="book">
  		   Title:  <input type="text" name="title">
  		   Year:   <input type="number" name="year">
  		           <input type="button" id="sed" value="Ok">
  	</pre>
  </form>
  <br><br>
  <div id="cont"></div>
  <input type="button" value="More" id="more">
</body>
</html>