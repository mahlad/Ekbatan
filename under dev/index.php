<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>UnderDev</title>
	<link rel="stylesheet" href="css/1styles.css"/>
	<link rel="stylesheet" href="css/style.css">
	<script type="text/javascript" src="script/html5shiv.js"></script>
	<script type="text/javascript" src="script/zepto.js"></script>
	<script type="text/javascript" src="script/underdev.js"></script>
	<script type="text/javascript" src="script/mail.js"></script>

</head>
<body>
	<div class="out"></div>
	<div class="container">
		<?php 
			include 'about-ekbatan.php';
			include 'about.php';
		 ?>
		 <div class="video-bg">
			<video preload="none" autoplay="autoplay" loop="loop">
				<source src="http://themeflava.com/hotpixels/wp-content/uploads/2012/10/GrassAndRain.webm">
			</video>
		</div>
	</div>
	<div class="total">
	<?php 
		include 'formsendmail.php';
	?>
	</div>
	</body>
</html>