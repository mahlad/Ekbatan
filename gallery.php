<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Cue Slider Demo 1</title>
	<link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="scripts/zepto.js"></script>
	<script type="text/javascript" src="scripts/cueslider.js"></script>
    
</head>
<body>
	<div class="banner">
<ul>
            <li style="left: -127px; top: -65px; opacity: 0; "><img src="images/image-setgallery/1.png" width="110" height="110"></li>
            <li style="left: 98px; top: 0; opacity: 1; "><img src="images/image-setgallery/2.png" width="110" height="110"></li>
            <li style="left: 30px; top: 40px; opacity: 1; "><img src="images/image-setgallery/3.png" width="110" height="110"></li>
            <li style="left: 98px; top: 105px; opacity: 1; "><img src="images/image-setgallery/4.png" width="110" height="110"></li>
            <li style="left: 45px; top: 160px; opacity: 1; "><img src="images/image-setgallery/5.png" width="110" height="110"></li>
            <li style="left: 95px; top: 220px; opacity: 1; "><img src="images/image-setgallery/6.png" width="110" height="110"></li>
            <li style="left: -183px; top: 600px; opacity: 0; "><img src="images/image-setgallery/7.png" width="110" height="110"></li>
        </ul>
        <div class="next ngallery"></div>
        <div class="back pgallery" style="left:140px; top:360px;"></div>
	</div>
	<script type="text/javascript">
		$(function(){
			$('div.banner > ul li').cueslider();
		});
	</script>
</body>
</html>
