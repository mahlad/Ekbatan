<?php 
	include "./inc/header.php";
?>
	<section class="main">
		<div class="main-txt">
			<h1>hello! i'm shihab
				<img src="images/shihabs_registeredlogo_tm.png">
			</h1>
			<h2>a Freelance web/graphic Designer.</h2>
			<h3>Thank you for discovering me. This website is the virtual home of mine. I always had the passion to be creative in some way and  wanted to pursue it.
        I figured, it was about time to see what i could do and find which avenue to take to be successful.</h3>
		</div>
		<div class="pr2">
			<div class="buttonekbatan"><p>گرافیک و تبلیغات</p></div>
        	<div class="buttonkanon"><p>شبکه و کامپیوتر</p></div>
        </div>
	</section>
	<div class="location-main-btn cover"></div>
	<section id="button">
		<ul id="main-menu">
			<li>
				<div class="header-bg">
					<div class="header-txt cover">
						<div class="header-icon">
							<img src="images/icon_digitalart.png" alt="title" width="30" height="30" />
						</div>
						<div class="header-title">خدمات</div>
					</div>
				</div>
			</li>
			<div class="content">
				<div class="txt">
					<p>
						خدمات ما خدمات ما خدمات ما خدمات ما خدمات ما خدمات ما خدمات ما خدمات ما 
					</p>
				</div>
			</div>
			<li>
				<div class="header-bg">
					<div class="header-txt cover">
						<div class="header-icon">
							<img src="images/icon_digitalart.png" alt="title" width="30" height="30" />
						</div>
						<div class="header-title">گالری</div>
					</div>
				</div>
			</li>
			<div class="content">
				<div class="txt">
					<?php 
						include "setgallery.php";
					?>
				</div>
			</div>
			<li>
				<div class="header-bg">
					<div class="header-txt cover">
						<div class="header-icon">
							<img src="images/icon_digitalart.png" alt="title" width="30" height="30" />
						</div>
						<div class="header-title">مقاله ها</div>
					</div>
				</div>
			</li>
			<div class="content">
				<div class="txt">
					<?php 
						include "article.php";
					?>
				</div>
			</div>
			<li>
				<div class="header-bg">
					<div class="header-txt cover">
						<div class="header-icon">
							<img src="images/icon_digitalart.png" alt="title" width="30" height="30" />
						</div>
						<div class="header-title">تبلیغات</div>
					</div>
				</div>
			</li>
			<div class="content">
				<div class="txt">
					<?php 
						include "marketing.php";
					?>
				</div>
			</div>
			<li>
				<div class="header-bg">
					<div class="header-txt cover">
						<div class="header-icon">
							<img src="images/icon_digitalart.png" alt="title" width="30" height="30" />
						</div>
						<div class="header-title">ایده ها</div>
					</div>
				</div>
			</li>
			<div class="content">
				<div class="txt">
					سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام سلام 
				</div>
			</div>
		</ul>
	</section>
	<div class="line"></div>
	<section id="end">
		<div class="content-end">
			<div class="text-left">
				<h1 class="contactus">درباره ما</h1>
				<div class="txt">
					<div class="content-txt f13">
						<table>
							<tr>
								<td class="tel"></td>
								<td class="txt">7331 879 511 98+</td>
							</tr>
							<tr>
								<td class="mobile"></td>
								<td class="txt">1157 816 915 98+</td>
							</tr>
							<tr>
								<td class="fax"></td>
								<td class="txt">7331 879 511 98+</td>
							</tr>
							<tr>
								<td class="adrs"></td>
								<td class="txt">مشهد - بلوار پیروزی - بین پیروزی 8-6 - پلاک 116 - واحد 5</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div class="text-right txr">
				<h1 class="contactus">ارتباط با ما...</h1>
				<div class="contact">
					بهترین راه برای رسیدن به من از طریق ایمیل است. لطفا در صورت تمایل با من تماس بگیرید در هر زمان برای نمایش داده های مربوط به کار هر. شما همیشه استقبال :)
					<form>
						<input type="text" class="name" id="name" />
						<input type="text" class="email" id="email" />
						<textarea class="textarea" id="texterea" placeholder="پیغام"></textarea>
						<input type="image" name="btnimg" id="btnimg" src="images/button_sendme.png" />
					</form>
				</div>
			</div>
		</div>
	</section>
	<div class="sp-marketing">
		<iframe src="./special-marketing.php" id="if-sp-marketing">
		</iframe>
		<a id="fancy-close"></a>
	</div>
<?php 
	include "./inc/footer.php";
?>