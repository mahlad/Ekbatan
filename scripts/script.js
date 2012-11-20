$(function(){
	var ListMenu = $('section#button  ul#main-menu > li '),
		ContentList = $('section#button  ul#main-menu  div.content'),
		BtnKanon = $('section.main div.buttonkanon'),
		BtnEkbatan = $('section.main div.buttonekbatan'),
		ListSetGallery = $('div.banner ul li'),
		LinkSpecialMarke = $('section.marketing a'),
		BtnClose = $('div.sp-marketing a#fancy-close'),
		flag = false,
		flagKanon = false,
		flagEkbatan =false,
		flagSpMarket = false,
		current = -1;

	function OpenMenu(){
		openli=indexList/2;
		if (openli == 2) {
			hmenu = 470;
		}else{
			hmenu = 470;
		};
		if (flagSpMarket) {
			$('div.sp-marketing').css({
				'display' : 'none',
			});
		};
		ContentList.eq(openli).css({
			'display': 'block',
		}).animate({
				opacity : 1,
				height:hmenu,
			},800);
		flag = true;
		current = indexList;
	}; 

	function CloseMenu(choos){
		ContentList.eq(choos).animate({
			opacity : 0,
			height:0,
		},800,'',function(){
			$(this).css({
				'display' : 'none',
			});
		});
	};

	ListMenu.click(function(){
		indexList = ($(this).index());
		if (current != -1) {
			CloseMenu(openli);	
			if (current == indexList) {
				flag = true;
			}else{
				flag = false;
			}
		};
		if (!flag) {
			OpenMenu();	
		}else{
			CloseMenu(openli);
		 	flag = false;
		 	current = -1;
		 }
	});
	/******************** MAIN MENU **************/
	BtnKanon.click(function(){
		flagKanon = !flagKanon;
		$(this).removeClass('buttonkanon').addClass('change-icon');
		BtnEkbatan.removeClass('change-icon').addClass('buttonekbatan');
		if (flagKanon) {
			$('section#button').css({
				'display': 'block',
			});
			$('section#end').css({
				'display': 'block',
			});
		}else{
			$('html, body').animate({
				scrollTop: $(".main").offset().top
			}, 1000 ,'',function(){
				$('section#button').css({
					'display': 'none',
				});
				$('section#end').css({
					'display': 'none',
				});
				BtnKanon.removeClass('change-icon').addClass('buttonkanon');
			});
		};
		$('html, body').animate({
			scrollTop: $("div.location-main-btn").offset().top
		}, 2000);
	});

	BtnEkbatan.click(function(){
		flagEkbatan = !flagEkbatan;
		$(this).removeClass('buttonekbatan').addClass('change-icon');
		BtnKanon.removeClass('change-icon').addClass('buttonkanon');
		if (flagEkbatan) {
			$('section#button').css({
				'display': 'block',
			});
			$('section#end').css({
				'display': 'block',
			});
		}else{
			$('html, body').animate({
				scrollTop: $(".main").offset().top
			}, 1000 ,'',function(){
				$('section#button').css({
					'display': 'none',
				});
				$('section#end').css({
					'display': 'none',
				});
				BtnEkbatan.removeClass('change-icon').addClass('buttonekbatan');
			});
		}
		$('html, body').animate({
			scrollTop: $("div.location-main-btn").offset().top
		}, 2000);
	});
	/************ CLICK ON SET GALLERY *************/
	ListSetGallery.click(function(){
		window.open("gallery.php");
	});
	/**************** FANCY CLOSE ****************/
	LinkSpecialMarke.click(function(){
		flagSpMarket = true;
		$('div.sp-marketing').css({
			'display' : 'block',
		});
	});

	BtnClose.click(function(){
		$('div.sp-marketing').animate({
			width : 0,
			height : 0 ,
			top : 1000 ,
			right :650
		},500,'',function(){
			$('div.sp-marketing').css({
				'display' : 'none',
				width :630,
				height : 430,
				top : 800 ,
				right:340
			});	
		});
	});
});