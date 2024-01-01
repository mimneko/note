{
	'use strict'

	$('.navbtn').on('click', (event) => {
		$('.top-navigation-close').removeClass('top-navigation-close')
		event.preventDefault()
		$e = $(event.currentTarget)
		if($e.hasClass('close')) {
			// メニューが開いている状態から閉まる状態へ
			$('.header-nav').slideUp()
			$e.removeClass('close')
			$('.header-nav').addClass('collapse')
		} else {
			// メニューが閉じている状態から開く状態へ
			$('.header-nav').slideDown()
			$e.addClass('close')
			$('.header-nav').removeClass('collapse')
		}
	})

}
