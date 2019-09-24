<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
	<script src="jquery-3.3.1.min.js"></script>

  <style type="text/css">
    head{
      text-align: center;
    }
    body{
    	text-align: center;
      margin: auto;
    }
    div{
    	display: line-block;
    }
    input{
    	border-radius: 0;
  		border: solid 1px #888;
  		width: 260px;
  		height: 40px;
  		background: white;
  		opacity: 0.9;
  		transition: all .2s;
    }
    input:hover{
    	width: 280px;
    }
    input:active{
    	opacity: 1;
  		background: #aaa;
  		border:solid 1.5px #888;
    }
    #form{
      margin: auto;
      width: 50%;
    }
  	#pass{
  		position: relative;
      top: 20px;
  	}
  	#user{
  		position: relative;
  		top:10px;
  	}
    #registr{
    	position: relative;
    	top: 30px;
    	border:solid 1px #888;
    	height: 40px;
    	width: 260px;
    	margin: auto;
    	color: #888;
    	transition: all .3s;
    }
    #registr:hover{
      height: 40px;
      width: 280px;
      cursor: pointer;
      color: #111;
    }
    #registr:active{
    	background: #aaa;
    }
    #reg{
    	height: 1px;
    	width: 1px;
    	border:solid 1px #888;
    	margin: auto;
    	border-radius: 5px;
      position: relative;
      top: -65px;
      background: white;
      opacity: 0;
      display: none;
    }
    .reggg{
    	height: 0px;
    	width: 0px;
    	cursor: default;
    }
    #reg1{
    	position: relative;
    	top:10px;
    }
    #reg2{
    	position: relative;
    	top:20px;
    }
    #reg3{
    	position: relative;
    	top:30px;
    }
    #reg4{
    	position: relative;
    	top:50px;
    }
    #reg5{
    	position: relative;
    	top: 60px;
    }
    #reg6{
    	position: relative;
    	top: 40px;
    }
    #endreg{
    	position: relative;
    	top: 60px;
    	width: 130px;
    	height: 20px;
    	margin: auto;
    	/*font-size: 70%;*/
    	border:solid 1px #888;
    	color: #888;
    	transition: all .2s;
    	cursor: pointer;
    }
    #endreg:hover{
    	color: #444;
    	width: 140px;
    }
    #endreg:active{
    	background: #aaa;
    }
    #comeback{
    	height: 20px;
    	width: 110px;
    	border:solid 1px #888;
    	margin: auto;
    	position: relative;
    	top: 50px;
    	color: #888;
    	transition: all .2s;
    	cursor: pointer;
    }
    #comeback:hover{
      width: 120px;
      color: #444;
    }
    #comeback:active{
    	background: #aaa;
    }
    small{
    	margin: 0; padding: 0; color: #d25e5e; font-size: 50%;
    }
    #p1{/*
      position: absolute;
      top: 15px;
      left: 278px;*/
      position: relative;
      top: 10px;
      left: 10px;
    }
    #p2{
    	position: relative;
      top: 20px;
      left: 10px;
    }
    #p3{
    	position: relative;
      top: 30px;
      left: 10px;
    }
    #p4{
    	position: relative;
      top: 40px;
      left: 10px;
    }
    #p5{
    	position: relative;
      top: 50px;
      left: 10px;
    }
    #p6{
    	position: relative;
      top: 60px;
      left: 10px;
    }
    #ppp{
    	font-size: 80%;
    	color: #d25e5e;
    	margin: 0;
    	padding: 0;
    	position: relative;
    	top: 60px;
    	display: none;
    }

  </style>
  
</head>
<body id="body">
	<form method="post" action="index.php" id="form">
		<input type="text" name="user" placeholder="Email" class="butt" id="user" autocomplete="off"><br>
		<input type="password" name="pass" placeholder="Password" class="butt" id="pass"><br>
    <div id="registr">Or Registration</div>

    <div id="reg">
    	 <input type="test" name="surname" class="reggg" id="reg1" placeholder="Имя" autocomplete="off"><small id="p1"></small><br>
       <input type="text" name="subname" class="reggg" id="reg2" placeholder="Фамилия" autocomplete="off">
       <small id="p2"></small><br>
       <input type="text" name="email" class="reggg" id="reg3" placeholder="Email" autocomplete="off">
       <small id="p3"></small><br>
       <input type="text" name="phoneN" class="reggg" id="reg6" placeholder="Номер телефона" autocomplete="off">
       <small id="p4"></small><br>
       <input type="password" name="passwordF" class="reggg" id="reg4" placeholder="Пароль" autocomplete="off">
       <small id="p5"></small><br>
       <input type="password" name="passwordS" class="reggg" id="reg5" placeholder="Повтор Паролья" autocomplete="off">
       <small id="p6"></small><br>
       <small id="ppp"></small><br>
       <div id="endreg">To Register</div><br>
       <div id="comeback">Come Back</div>
    </div>
	</form>
	<script type="text/javascript">

      var int = setInterval(check, 500);

      function check(){
      	var emaill = document.getElementById("user").value;
      	var passl = document.getElementById("pass").value;
      	var oooo = "rr=ee&emaill="+emaill+"&passl="+passl;
      	if((/[a-zA-Z0-9\.\-_]+@[a-z]+\.[a-z]{2,6}/.test(emaill))==true&&passl.length>=8&&(/[\s\t]+/.test(emaill))==false){
      		$.ajax({
      			url: "check.php",
      			type: "POST",
      			data: oooo,
      			success: function(data){
      				if(data == "http"){
      					location.replace("req.php");
      				}
      				else{}
      			},
      			error: function(data){
               alert("error: "+data);
      			}
      		});
      	}
      	else{}
      }

      var checkReg = setInterval(cR,500);

      var nameL = false;
      var sunameL = false;
      var emailL = false;
      var passwL = false;
      var phoneL = false;

      function cR(){
         var name = document.getElementById("reg1").value;
         var suname = document.getElementById("reg2").value;
         var email = document.getElementById("reg3").value;
         var passw = document.getElementById("reg4").value;
         var passwS = document.getElementById("reg5").value;
         var phone = document.getElementById("reg6").value;

         if(name!=""){
         	if((/[A-zA-zа-яА-Я]{4,20}/.test(name))==true&&(/[0-9\!\@\#\$\%\^\&\*\(\)\.\>\<\,\:\;\"\'\s\t]+/.test(name))==false&&name!=suname){
             nameL = true;
             document.getElementById("p1").innerHTML = "Ok";
             document.getElementById("p1").style.color = "#6dd45d";
         	}
         	else{
         		nameL = false;
         	document.getElementById("p1").style.color = "#d25e5e";
         	document.getElementById("p1").innerHTML = "No";
         }
       }

         if(suname!=""){
         	if((/[A-zA-zа-яА-Я]{4,20}/.test(suname))==true&&(/[0-9\!\@\#\$\%\^\&\*\(\)\.\>\<\,\:\;\"\'\s\t]+/.test(suname))==false&&name!=suname){
             sunameL = true;
             document.getElementById("p2").innerHTML = "Ok";
             document.getElementById("p2").style.color = "#6dd45d";
         	}
         	else{
         		sunameL = false;
         	document.getElementById("p2").style.color = "#d25e5e";
         	document.getElementById("p2").innerHTML = "No";
          }
         }

        if(email!=""){
        	if((/[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/.test(email))==true&&(/[\s\t]+/.test(email))==false){
        		emailL = true;
        		document.getElementById("p3").innerHTML = "Ok";
        		document.getElementById("p3").style.color = "#6dd45d";
        	}
        	else {
        		emailL =false;
        		document.getElementById("p3").innerHTML = "No";
        		document.getElementById("p3").style.color = "#d25e5e";
        	}
        }
        
        if(phone!=""){
        	if(/[A-zA-zа-яА-Я\)\(\!\@\#\$\%\^\&\*\{\}\'\"\:\:]+/.test(phone)==false){
        	  if((/[0-9]{11,13}/.test(phone))==true&&(/^8|^7/.test(phone))==true&&(/[0-9]{13,200}/.test(phone))==false){//&&(/)==false){
        	  		phoneL = true;
        	  	  document.getElementById("p4").innerHTML = "Ok";
        	  	  document.getElementById("p4").style.color = "#6dd45d";
        	  	
        	  }
        	  else {
        	  	phoneL = false;
        	  	document.getElementById("p4").innerHTML = "No";
        	  	document.getElementById("p4").style.color = "#d25e5e";
        	  }
        	}
        	else {
        		phoneL = false;
        	  document.getElementById("p4").innerHTML = "No";
        	  document.getElementById("p4").style.color = "#d25e5e";
        	}
        }

        if(passw!=""&passwS!=""){
        	if(passw==passwS){
              if(passw.length>=8){
              	passwL = true;
                  document.getElementById("p5").style.color = '#6dd45d';
                  document.getElementById("p6").style.color = '#6dd45d';
                  document.getElementById("p5").innerHTML = "Ok";
                  document.getElementById("p6").innerHTML = "Ok";
              }
              else {
              	passwL = false;
              	document.getElementById("p5").style.color = '#d25e5e';
        		    document.getElementById("p6").style.color = '#d25e5e';
        		    document.getElementById("p5").innerHTML = "No";
        		    document.getElementById("p6").innerHTML = "No";
              }
        	}
        	else{
        		passwL = false;
        		document.getElementById("p5").style.color = '#d25e5e';
        		document.getElementById("p6").style.color = '#d25e5e';
        		document.getElementById("p5").innerHTML = "No";
        		document.getElementById("p6").innerHTML = "No";
        	}
        }
      }

      document.getElementById("endreg").onclick = function(){

         var name = document.getElementById("reg1").value;
         var suname = document.getElementById("reg2").value;
         var email = document.getElementById("reg3").value;
         var passw = document.getElementById("reg4").value;
         var passwS = document.getElementById("reg5").value;
         var phone = document.getElementById("reg6").value;

         dd = "rr=aa&name="+name+"&suname="+suname+"&email="+email+"&passw="+passw+"&passwS="+passwS+"&phone="+phone;
         //alert(dd);

         if(nameL&&sunameL&&phoneL&&passwL&&emailL){
             $.ajax({
             	url: "check.php",
             	type: "POST",
             	data: dd,
             	success: function(data){
                 if(data == "true"){
                 	comeB();
                 	document.getElementById("ppp").style.display = 'nane';
                 	document.getElementById("ppp").innerHTML = ".";
                 }
                 else if (data == "err") {
                 	 document.getElementById("ppp").style.display = 'block';
                 	 document.getElementById("ppp").innerHTML = "Пользователь с такими данными существует.";
                 }
                 else{
                 	alert("false");
                 }
             	},
             	error: function(data){
             		alert(data+" error");
             	}
             });
         }
         else{
            
         }

      };


      document.getElementById("registr").onclick = function(){
      	var o = true;
      	var t = true;
      	var tr = true;
      	var f = true;

      	var i=0;
        var ii = 0;
        var iii = 0;
        var iiii = 0;

        var rr = setInterval(up,20);

        function up(){

        	document.getElementById("reg").style.display = "block";

          if(i >= 300){
            o = false;
          }
          else i+=30;
          if(ii>=400){
          	t = false;
          }
          else ii+=40;
          if(iii >=1){
          	tr = false;
          }
          else iii += 0.05;
          if(iiii >= 130){
             f=false;
          }
          else {iiii+=10;}

          if(!o&&!t&&!tr&&!f){
          	clearInterval(rr);
          	document.getElementById("body").style.background = '#888';
          }
          else {}

          document.getElementById("reg").style.height = i+"px";
          document.getElementById("reg").style.width = ii+"px";
          document.getElementById("reg").style.opacity = iii;
          document.getElementById("reg1").style.width = iiii+"px";
          document.getElementById("reg2").style.width = iiii+"px";
          document.getElementById("reg3").style.width = iiii+"px";
          document.getElementById("reg4").style.width = iiii+"px";
          document.getElementById("reg5").style.width = iiii+"px";
          document.getElementById("reg6").style.width = iiii+"px";
          document.getElementById("reg1").style.height = 20+"px";
          document.getElementById("reg2").style.height = 20+"px";
          document.getElementById("reg3").style.height = 20+"px";
          document.getElementById("reg4").style.height = 20+"px";
          document.getElementById("reg5").style.height = 20+"px";
          document.getElementById("reg6").style.height = 20+"px";
          //document.getElementById("reg").style.borderRadius = 'solid 1px #888';
        }
        document.getElementById("reg1").style.cursor = "text";
        document.getElementById("reg2").style.cursor = "text";
        document.getElementById("reg3").style.cursor = "text";
        document.getElementById("reg4").style.cursor = "text";
        document.getElementById("reg5").style.cursor = "text";
        document.getElementById("reg6").style.cursor = "text";
      };
      document.getElementById("reg1").onmouseover = function(){this.style.width = '140px';}
      document.getElementById("reg1").onmouseout = function(){this.style.width = '130px';}
      document.getElementById("reg2").onmouseover = function(){this.style.width = '140px';}
      document.getElementById("reg2").onmouseout = function(){this.style.width = '130px';}
      document.getElementById("reg3").onmouseover = function(){this.style.width = '140px';}
      document.getElementById("reg3").onmouseout = function(){this.style.width = '130px';}
      document.getElementById("reg4").onmouseover = function(){this.style.width = '140px';}
      document.getElementById("reg4").onmouseout = function(){this.style.width = '130px';}
      document.getElementById("reg5").onmouseover = function(){this.style.width = '140px';}
      document.getElementById("reg5").onmouseout = function(){this.style.width = '130px';}
      document.getElementById("reg6").onmouseover = function(){this.style.width = '140px';}
      document.getElementById("reg6").onmouseout = function(){this.style.width = '130px';}

      document.getElementById("comeback").onclick = function (){
        var o = true;
      	var t = true;
      	var tr = true;
      	var f = true;

      	var i = 300;
        var ii = 400;
        var iii = 1;
        var iiii = 130;

        var rr = setInterval(down, 20);

        function down(){

          if(i<=300){
          	o = false;
          }
          else i-=30;
          if(ii<=400){
          	t = false;
          }
          else ii-=40;
          if(iii<=0){
          	tr = false;
          }
          else iii -=0.05;
          if(iiii <= 0){
          	f = false;
          }
          else iiii-=10;
          if(!o&&!t&&!tr&&!f){
          	clearInterval(rr);
          	document.getElementById("reg").style.display = "none";
          	document.getElementById("body").style.background = "white";
          }
          else {}

          document.getElementById("reg").style.height = i+"px";
          document.getElementById("reg").style.width = ii+"px";
          document.getElementById("reg").style.opacity = iii;

          document.getElementById("reg1").style.width = iiii+"px";
          document.getElementById("reg2").style.width = iiii+"px";
          document.getElementById("reg3").style.width = iiii+"px";
          document.getElementById("reg4").style.width = iiii+"px";
          document.getElementById("reg5").style.width = iiii+"px";
          document.getElementById("reg6").style.width = iiii+"px";
          document.getElementById("reg1").style.height = 20+"px";
          document.getElementById("reg2").style.height = 20+"px";
          document.getElementById("reg3").style.height = 20+"px";
          document.getElementById("reg4").style.height = 20+"px";
          document.getElementById("reg5").style.height = 20+"px";
          document.getElementById("reg6").style.height = 20+"px";
        }
      };

      function comeB(){
      	var o = true;
      	var t = true;
      	var tr = true;
      	var f = true;

      	var i = 300;
        var ii = 400;
        var iii = 1;
        var iiii = 130;

        var rr = setInterval(down, 1);

        function down(){

          if(i<=300){
          	o = false;
          }
          else i-=3;
          if(ii<=400){
          	t = false;
          }
          else ii-=4;
          if(iii<=0){
          	tr = false;
          }
          else iii -=0.01;
          if(iiii <= 0){
          	f = false;
          }
          else iiii-=10;
          if(!o&&!t&&!tr&&!f){
          	clearInterval(rr);
          	document.getElementById("reg").style.display = "none";
          	document.getElementById("body").style.background = "white";
          }
          else {}

          document.getElementById("reg").style.height = i+"px";
          document.getElementById("reg").style.width = ii+"px";
          document.getElementById("reg").style.opacity = iii;

          document.getElementById("reg1").style.width = iiii+"px";
          document.getElementById("reg2").style.width = iiii+"px";
          document.getElementById("reg3").style.width = iiii+"px";
          document.getElementById("reg4").style.width = iiii+"px";
          document.getElementById("reg5").style.width = iiii+"px";
          document.getElementById("reg6").style.width = iiii+"px";
          document.getElementById("reg1").style.height = 20+"px";
          document.getElementById("reg2").style.height = 20+"px";
          document.getElementById("reg3").style.height = 20+"px";
          document.getElementById("reg4").style.height = 20+"px";
          document.getElementById("reg5").style.height = 20+"px";
          document.getElementById("reg6").style.height = 20+"px";
        }
      }
      

  </script>
</body>
</html>