$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
	});
	function toggleSlide(item){
		$(item).each(function(i){
			$(this).on('click',function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
			})
		})
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//modal

	$('[data-madal=consultation]').on('click',function(){
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.madal__close').on('click',function(){
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});

	$('.button_mini').each(function(i){
		$(this).on('click', function(){
			$('#order .madal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	function validForms(form){ 
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required:true,
					email: true
				}
			},
			messages: {
				name: "Введите свое имя",
				phone: "Введите свой номер",
				email: {
				  required: "Введите свою почту",
				  email: "Неправильная почта"
				}
			}
		});
	};
	validForms('#consultation-form');
	validForms('#consultation form');
	validForms('#order form');

	$('input[name = phone]').mask("+7 (999) 999-9999");

	//smooth scroll/pageup

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else{
			$('.pageup').fadeOut();
		}
	});
	new WOW().init();

	$('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
			url: 'https://formsubmit.co/ajax/vladimir8sabaev@gmail.com',
			dataType: 'json',
			accepts: 'application/json',
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });
});