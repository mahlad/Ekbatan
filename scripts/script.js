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
	ListMenu.click(function(){
		indexList = ($(this).index());
		if (current != -1) {
			ContentList.eq(current).animate({
				height: 0,
				'display' : 'none',
			},300);
			flag = false;
			if (current == indexList) {
				flag = true;
			};
		};
		if (!flag) {
			OpenMenu();	
		}else{
			ContentList.eq(indexList).animate({
				height: 0,
				'display': 'none',
			},300);
		 	flag = false;
		 }
	});
	
});