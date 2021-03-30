/* $(window).scroll(function() {
	var scTop = $(this).scrollTop()
	if(scTop > 200) {
		if(!$('.header-wrapper').hasClass('active')) {
			$('.header-wrapper').css('top', '-60px')
			$('.header-wrapper').stop().animate({'top': 0}, 300)
			$('.header-wrapper').addClass('active')
		}
	}
	else {
		$('.header-wrapper').removeClass('active')
	}
}) */


$(window).scroll(function () {
	var scTop = $(this).scrollTop()
	if (scTop > 200) {
		$('.header-wrapper').css('transform', 'translateY(-100%)')
		$('.header-wrapper').css('transform')
		$('.header-wrapper').addClass('active')
		$('.header-wrapper').css('transform', 'translateY(0)')
	} else {
		$('.header-wrapper').css('transform', 'translateY(0)')
		$('.header-wrapper').removeClass('active')
	}
})

$('.mo-bars').click(function() {
	$('.monavi-wrapper').toggleClass('active')
})

$('.modal-wrapper').click(function() {
	$(this).css('display', 'none')
})

$('.pf-wrap > .pf > img').click(function() {
	var src = $(this).attr('src')
	var desc = $(this).attr('alt')
	$('.modal-wrapper').css('display', 'block')
	$('.modal-wrapper .modal-wrap').css('transform', 'scale(0)')
	$('.modal-wrapper .modal-wrap').css('transform')
	$('.modal-wrapper .modal-img').attr('src', src)
	$('.modal-wrapper .modal-title').text(desc)
	$('.modal-wrapper .modal-wrap').css('transform', 'scale(1)')
})