$(document).ready(function(){
	function toggleSlide(item){
		$(item).each(function(i){
			$(this).on('click',function(e){
				e.preventDefault();
				$('.teachers__item-content').eq(i).toggleClass('teachers__item-content-active');
				$('.teachers__item-list').eq(i).toggleClass('teachers__item-list-active');
			})
		})
	};
	toggleSlide('.teachers__item-more');
	toggleSlide('.teachers__item-back');

	//modal
	new WOW().init();

});