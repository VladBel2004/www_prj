<?php


	function make_html()
	{
		require "database.php";
		$cookie_value = $_COOKIE['cookie_itvdn'];
		echo $_COOKIE['cookie_itvdn'];
		$value = $array[$cookie_value];

		if(gettype($value) == "array")
		{
			$url = $value[0];
			$name = $value[1];
			$color = bin2hex(random_bytes(3));
			
			
			return <<<_END
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Video</title>

	<link rel="stylesheet" href="js_lib/bootstrap/dist/css/bootstrap-grid.min.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/video.css">
	<link rel="stylesheet" href="css/video-js.css">
	<link rel="stylesheet" href="css/style.css">

	<script src="js_lib/jquery/dist/jquery.min.js"></script>
	<script src="js/prefixfree.min.js"></script>

</head>
<body>
		<style>

			h1:hover{
				color: #eeeeee;
				text-shadow: 2px 1px 10px #$color;
			}

		</style>

		<h1>$name</h1>

		<h2 id="back"> 
			<i class="fa fa-angle-left"></i> 
			Back
		</h2>

		<div class=" myFaSettings" id="left">
			<i class="fa fa-angle-left" style="float: left; line-height: 370px; margin-left: 20px;"></i>
		</div>

		<div class="myFaSettings" style="left: 1320px;" id="right">
			<i class="fa fa-angle-right" style="float: right; line-height: 370px; margin-right: 20px;"></i>
		</div>

		<div id="instructions">
  			<video id="my_video_1" class="video-js vjs-default-skin" controls preload="none" data-setup='{ "aspectRatio":"1920:1080", "playbackRates": [1, 1.5, 2] }'>
    			<source src="$url" type='video/mp4' />
 			</video>
		</div>

		<script src='js/video.js'></script>
		<script src="js/video_player.js"></script>

</body>
</html>
_END;
		}
		else
		{
			return "Error in make_html function.";
		}
	}

?>