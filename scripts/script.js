$(function(){
	var ListMenu = $('section#button  ul#main-menu > li '),
		ContentList = $('section#button  ul#main-menu  div.content'),
		BtnKanon = $('section.main div.buttonkanon'),
		BtnEkbatan = $('section.main div.buttonekbatan'),
		ListSetGallery = $('div.banner ul li'),
		flag = false,
		flagKanon = false,
		flagEkbatan =false,
		current = -1;

	function OpenMenu(){
		openli=indexList/2;
		if (openli == 2) {
			hmenu = 500;
		}else{
			hmenu = 470;
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
			$('section#button').css({
				'display': 'none',
			});
			$('section#end').css({
				'display': 'none',
			});
			$(this).removeClass('change-icon').addClass('buttonkanon');
		};
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
			$('section#button').css({
				'display': 'none',
			});
			$('section#end').css({
				'display': 'none',
			});
			$(this).removeClass('change-icon').addClass('buttonekbatan');
		}
	});

	/************ CLICK ON SET GALLERY *************/
	ListSetGallery.click(function(){
		window.open("gallery.php");
	});
});