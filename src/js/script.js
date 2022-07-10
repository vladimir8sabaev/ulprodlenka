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

	new WOW().init();

	$('.button_mini').each(function(i){
		$(this).on('click', function(){
			$('.modal-contact').modal('show');
		});
	});
	$('.contacts-form__close').each(function(i){
		$(this).on('click', function(){
			$('.modal-contact').modal('hide');
		});
	});
	$('.modal-body-close').each(function(i){
		$(this).on('click', function(){
			$('.modal-thanks').modal('hide');
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
			},
			errorPlacement:function(error,element){
				error.appendTo(element.parent().after());
            }
		});
	};

	validForms('#contacts-form');
	validForms('#contacts-form-modal');

	$('input[name = phone]').mask("+7 (999) 999-9999");
	
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
			if ($("#contacts-form-modal").valid()){
				$('.modal-contact').modal('hide');
				$('.modal-thanks').modal('show');
			};
			$('form').trigger('reset');
		});
		return false;
    });
});