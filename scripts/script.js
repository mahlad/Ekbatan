$(function(){
	var ListMenu = $('section#button ul li'),
		ContentList = $('section#button ul li div.content'),
		flag = false,
		current = -1;
	function OpenMenu(){
		ContentList.eq(indexList).animate({
				height: 100,
				'display': 'block',
			},300);
		flag = true;
		current = indexList;
	}; 

	function CloseMenu(choos){
		ContentList.eq(choos).animate({
			height: 0,
			'display' : 'none',
		},300);
	};

	ListMenu.click(function(){
		indexList = ($(this).index());
		if (current != -1) {
			CloseMenu(current);	
			flag = false;
			if (current == indexList) {
				flag = true;
			};
		};
		if (!flag) {
			OpenMenu();	
		}else{
			CloseMenu(indexList);
		 	flag = false;
		 	current = -1;
		 }
	});
	
});