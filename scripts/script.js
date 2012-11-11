$(function(){
	var ListMenu = $('section#button ul li'),
		ContentList = $('section#button ul li div.content'),
		flag = false;

	ListMenu.click(function(){
		indexList = ($(this).index());
		if (!flag) {
			ContentList.eq(indexList).animate({
				height: 100,
				'display': 'block',
			},300);
			flag = true;
		}else{
			ContentList.eq(indexList).animate({
				height: 0,
				'display': 'none',
			},300);
			flag = false;
		}
	});
	
});