<?php
	$default_page = <<<_END
<!DOCTYPE html>
<html lang="en">		
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>ITVDN</title>
	<link rel="stylesheet" href="css/ITVDN.css">
	<script src="js_lib/jquery/dist/jquery.min.js"></script>
</head>
<body>
	<div>
		<div>
			<h3>Html and Css</h3>
			<p onclick="call_ajax('html_and_css_1')">Go to Html and Css 1.</p>
			<p onclick="call_ajax('html_and_css_2')">Go to Html and Css 2.</p>
			<p onclick="call_ajax('html_and_css_3')">Go to Html and Css 3.</p>
			<p onclick="call_ajax('html_and_css_4')">Go to Html and Css 4.</p>
			<p onclick="call_ajax('html_and_css_5')">Go to Html and Css 5.</p>
			<p onclick="call_ajax('html_and_css_6')">Go to Html and Css 6.</p>
			<p onclick="call_ajax('html_and_css_7')">Go to Html and Css 7.</p>
			<p onclick="call_ajax('html_and_css_8')">Go to Html and Css 8.</p>
			<p onclick="call_ajax('html_and_css_9')">Go to Html and Css 9.</p>
			<br>
		</div
		<div>
			<h3>JavaScript Starter</h3>
			<p onclick="call_ajax('jss_1')">Go to JavaScript Starter 1.</p>
			<p onclick="call_ajax('jss_2')">Go to JavaScript Starter 2.</p>
			<p onclick="call_ajax('jss_3')">Go to JavaScript Starter 3.</p>
			<p onclick="call_ajax('jss_4')">Go to JavaScript Starter 4.</p>
			<p onclick="call_ajax('jss_5')">Go to JavaScript Starter 5.</p>
			<p onclick="call_ajax('jss_6')">Go to JavaScript Starter 6.</p>
			<p onclick="call_ajax('jss_7')">Go to JavaScript Starter 7.</p>
			<br>
		</div>
		<div>
			<h3>JavaScript Essential</h3>
			<p onclick="call_ajax('jse_1')">Go to JavaScript Ess 1.</p>
			<p onclick="call_ajax('jse_2')">Go to JavaScript Ess 2.</p>
			<p onclick="call_ajax('jse_3')">Go to JavaScript Ess 3.</p>
			<p onclick="call_ajax('jse_4')">Go to JavaScript Ess 4.</p>
			<p onclick="call_ajax('jse_5')">Go to JavaScript Ess 5.</p>
			<p onclick="call_ajax('jse_6')">Go to JavaScript Ess 6.</p>
			<p onclick="call_ajax('jse_7')">Go to JavaScript Ess 7.</p>
			<p onclick="call_ajax('jse_8')">Go to JavaScript Ess 8.</p>
			<p onclick="call_ajax('jse_9')">Go to JavaScript Ess 9.</p>
			<p onclick="call_ajax('jse_10')">Go to JavaScript Ess 10.</p>
			<p onclick="call_ajax('jse_11')">Go to JavaScript Ess 11.</p>
			<br>
		</div>
		<div>
			<h3>APS.NET Starter</h3>
			<p onclick="call_ajax('asps_1')">Go to ASP.NET Starter 1.</p>
			<p onclick="call_ajax('asps_2')">Go to ASP.NET Starter 2.</p>
			<p onclick="call_ajax('asps_3')">Go to ASP.NET Starter 3.</p>
			<p onclick="call_ajax('asps_4')">Go to ASP.NET Starter 4.</p>
			<p onclick="call_ajax('asps_5')">Go to ASP.NET Starter 5.</p>
			<p onclick="call_ajax('asps_6')">Go to ASP.NET Starter 6.</p>
			<p onclick="call_ajax('asps_7')">Go to ASP.NET Starter 7.</p>
			<p onclick="call_ajax('asps_8')">Go to ASP.NET Starter 8.</p>
			<p onclick="call_ajax('asps_9')">Go to ASP.NET Starter 9.</p>
			<p onclick="call_ajax('asps_10')">Go to ASP.NET Starter 10.</p>
			<br>
		</div>
		<div>
			<h3>ASP.NET Essential</h3>
			<p onclick="call_ajax('aspe_1')">Go to ASP.NET Ess 1.</p>
			<p onclick="call_ajax('aspe_2')">Go to ASP.NET Ess 2.</p>
			<p onclick="call_ajax('aspe_3')">Go to ASP.NET Ess 3.</p>
			<p onclick="call_ajax('aspe_4')">Go to ASP.NET Ess 4.</p>
			<p onclick="call_ajax('aspe_5')">Go to ASP.NET Ess 5.</p>
			<p onclick="call_ajax('aspe_6')">Go to ASP.NET Ess 6.</p>
			<p onclick="call_ajax('aspe_7')">Go to ASP.NET Ess 7.</p>
			<p onclick="call_ajax('aspe_8')">Go to ASP.NET Ess 8.</p>
			<p onclick="call_ajax('aspe_9')">Go to ASP.NET Ess 9.</p>
			<br>
		</div>
		<div>
			<h3>ASPMVC</h3>
			<p onclick="call_ajax('aspmvc_1')">Go to ASPMVC 1.</p>
			<p onclick="call_ajax('aspmvc_2')">Go to ASPMVC 2.</p>
			<p onclick="call_ajax('aspmvc_3')">Go to ASPMVC 3.</p>
			<p onclick="call_ajax('aspmvc_4')">Go to ASPMVC 4.</p>
			<p onclick="call_ajax('aspmvc_5')">Go to ASPMVC 5.</p>
			<p onclick="call_ajax('aspmvc_6')">Go to ASPMVC 6.</p>
			<p onclick="call_ajax('aspmvc_7')">Go to ASPMVC 7.</p>
			<br>
		</div>
		<div>
			<h3>ASP.NET Core</h3>
			<p onclick="call_ajax('aspcore_1')">Go to ASP.NET Core 1.</p>
			<p onclick="call_ajax('aspcore_2')">Go to ASP.NET Core 2.</p>
			<p onclick="call_ajax('aspcore_3')">Go to ASP.NET Core 3.</p>
			<p onclick="call_ajax('aspcore_4')">Go to ASP.NET Core 4.</p>
			<p onclick="call_ajax('aspcore_5')">Go to ASP.NET Core 5.</p>
			<p onclick="call_ajax('aspcore_6')">Go to ASP.NET Core 6.</p>
			<p onclick="call_ajax('aspcore_7')">Go to ASP.NET Core 7.</p>
			<p onclick="call_ajax('aspcore_8')">Go to ASP.NET Core 8.</p>
			<p onclick="call_ajax('aspcore_9')">Go to ASP.NET Core 9.</p>
			<p onclick="call_ajax('aspcore_10')">Go to ASP.NET Core 10.</p>
			<p onclick="call_ajax('aspcore_11')">Go to ASP.NET Core 11.</p>
		</div>
		<div>
			<h3>PHP Starter</h3>
			<p onclick="call_ajax('phps_1')">Go to PHP Starter 1.</p>
			<p onclick="call_ajax('phps_2')">Go to PHP Starter 2.</p>
			<p onclick="call_ajax('phps_3')">Go to PHP Starter 3.</p>
			<p onclick="call_ajax('phps_4')">Go to PHP Starter 4.</p>
			<p onclick="call_ajax('phps_5')">Go to PHP Starter 5.</p>
			<p onclick="call_ajax('phps_6')">Go to PHP Starter 6.</p>
			<p onclick="call_ajax('phps_7')">Go to PHP Starter 7.</p>
			<p onclick="call_ajax('phps_8')">Go to PHP Starter 8.</p>
			<p onclick="call_ajax('phps_9')">Go to PHP Starter 9.</p>
			<p onclick="call_ajax('phps_10')">Go to PHP Starter 10.</p>
			<p onclick="call_ajax('phps_11')">Go to PHP Starter 11.</p>
			<p onclick="call_ajax('phps_12')">Go to PHP Starter 12.</p>
			<p onclick="call_ajax('phps_13')">Go to PHP Starter 13.</p>
			<p onclick="call_ajax('phps_14')">Go to PHP Starter 14.</p>
			<p onclick="call_ajax('phps_15')">Go to PHP Starter 15.</p>
			<p onclick="call_ajax('phps_16')">Go to PHP Starter 16.</p>
			<br>
		</div>
		<div>
			<h3>PHP Essential</h3>
			<p onclick="call_ajax('phpe_1')">Go to PHP Ess 1.</p>
			<p onclick="call_ajax('phpe_2')">Go to PHP Ess 2.</p>
			<p onclick="call_ajax('phpe_3')">Go to PHP Ess 3.</p>
			<p onclick="call_ajax('phpe_4')">Go to PHP Ess 4.</p>
			<p onclick="call_ajax('phpe_5')">Go to PHP Ess 5.</p>
			<p onclick="call_ajax('phpe_6')">Go to PHP Ess 6.</p>
			<p onclick="call_ajax('phpe_7')">Go to PHP Ess 7.</p>
			<p onclick="call_ajax('phpe_8')">Go to PHP Ess 8.</p>
			<p onclick="call_ajax('phpe_9')">Go to PHP Ess 9.</p>
			<p onclick="call_ajax('phpe_10')">Go to PHP Ess 10.</p>
			<p onclick="call_ajax('phpe_11')">Go to PHP Ess 11.</p>
			<p onclick="call_ajax('phpe_12')">Go to PHP Ess 12.</p>
			<p onclick="call_ajax('phpe_13')">Go to PHP Ess 13.</p>
			<br>
		</div>
		<div>
			<h3>Laravel</h3>
			<p onclick="call_ajax('laravel_1')">Go to Laravel 1.</p>
			<p onclick="call_ajax('laravel_2')">Go to Laravel 2.</p>
			<p onclick="call_ajax('laravel_3')">Go to Laravel 3.</p>
			<p onclick="call_ajax('laravel_4')">Go to Laravel 4.</p>
			<p onclick="call_ajax('laravel_5')">Go to Laravel 5.</p>
			<p onclick="call_ajax('laravel_6')">Go to Laravel 6.</p>
			<p onclick="call_ajax('laravel_7')">Go to Laravel 7.</p>
			<p onclick="call_ajax('laravel_8')">Go to Laravel 8.</p>
			<p onclick="call_ajax('laravel_9')">Go to Laravel 9.</p>
			<p onclick="call_ajax('laravel_10')">Go to Laravel 10.</p>
			<br>
		</div>
	</div>
	<script>
		function call_ajax(arg)
		{
			$.ajax({
				data: 'arg=' + arg,
				url: 'index.php',
				type: 'GET',
				error: function(data)
				{
					alert('Error: ' + data);
				},
				success: function(data)
				{
					alert(data);
				},
			})
		}
	</script>
</body>
</html>

_END;

?>