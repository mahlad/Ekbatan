$(function(){
	var ListMenu = $('section#button ul li'),
		ContentList = $('section#button ul li div.content'),
		BtnKanon = $('section.main div.main-txt div.buttonkanon'),
		BtnEkbatan = $('section.main div.main-txt div.buttonekbatan'),
		flag = false,
		current = -1;

	function OpenMenu(){
		ContentList.eq(indexList).animate({
				// 'min-height': '200px',
				'display': 'block',
			},300);
		flag = true;
		current = indexList;
	}; 

	function CloseMenu(choos){
		ContentList.eq(choos).animate({
			// height: 0,
			'display' : 'none',
		},300);
	};

	ListMenu.click(function(){
		indexList = ($(this).index());
		if (current != -1) {
			CloseMenu(current);	
			if (current == indexList) {
				flag = true;
			}else{
				flag = false;
			}
		};
		if (!flag) {
			OpenMenu();	
		}else{
			CloseMenu(indexList);
		 	flag = false;
		 	current = -1;
		 }
	});
	
	BtnKanon.click(function(){
		$(this).removeClass('buttonkanon').addClass('buttonekbatan');
		BtnEkbatan.removeClass('buttonekbatan').addClass('buttonkanon');
	});

	BtnEkbatan.click(function(){
		$(this).removeClass('buttonkanon').addClass('buttonekbatan');
		BtnKanon.removeClass('buttonekbatan').addClass('buttonkanon');
	});
});