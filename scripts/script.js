$(function(){
	var ListMenu = $('section#button  ul#main-menu > li '),
		ContentList = $('section#button  ul#main-menu  div.content'),
		BtnKanon = $('section.main div.main-txt div.buttonkanon'),
		BtnEkbatan = $('section.main div.main-txt div.buttonekbatan'),
		ListSetGallery = $('div.banner ul li'),
		flag = false,
		current = -1;

	function OpenMenu(){
		openli=indexList/2;
		if (openli == 2) {
			hmenu = 800;
		}else{
			hmenu = 450;
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
		$(this).removeClass('buttonkanon').addClass('buttonekbatan');
		BtnEkbatan.removeClass('buttonekbatan').addClass('buttonkanon');
	});

	BtnEkbatan.click(function(){
		$(this).removeClass('buttonkanon').addClass('buttonekbatan');
		BtnKanon.removeClass('buttonekbatan').addClass('buttonkanon');
	});

	/************ CLICK ON SET GALLERY *************/
	ListSetGallery.click(function(){
		window.open("gallery.php");
	});
});