<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>Slide</title>
<link rel="stylesheet" type="text/css" href="styleslide.css" />
<script type="text/javascript" src="scripts/zepto.js"></script>
<script type="text/javascript" src="scripts/script-slide.js"></script>
</head>
<body>

<div class="container">
<!-- ----------------- slide --------------------------- -->
	<div class="slide"> 
    	<div class="train">
            <?php
                    $path="images/slide";
                    $scan=scandir($path);
                    foreach($scan as $img){
                        $exp=explode('.',$img);
                        $type=end($exp);
                        if($type=='jpg'){
                            echo "<div style=\"background-image:url('$path/$img');\"></div>";
                        }
                    }
                ?>
        </div>
        <div class="prv"></div>
        <div class="next"></div>
        <ul class="button">
      	<?php
			$image = 'images/slide/button';
			$img = scandir($image);
			foreach($img as $pic){
				$exp = explode('.',$pic);
				$type = end($exp);
				if ($type == 'png'){
					echo "<li><img src='$image/$pic' /></li>";
				}
			}
		?> 
		</ul>
    </div>
</div>

</body>
</html>
