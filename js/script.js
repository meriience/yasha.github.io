$(document).ready(function ($) {
	var myaudio = $("#myaudio")[0];
	$(".ad1 a")
		.mouseenter(function () {
			myaudio.play();
		});
	var myaudio = $("#myaudio")[0];
	$(".ad3 a")
		.mouseenter(function () {
			myaudio.play();
		});
	var myaudio = $("#myaudio")[0];
	$(".ad6 a")
		.mouseenter(function () {
			myaudio.play();
		});
	var myaudio = $("#myaudio")[0];
	$(".ad2 a")
		.mouseenter(function () {
			myaudio.play();
		});
	var myaudio = $("#myaudio")[0];
	$(".ad4 a")
		.mouseenter(function () {
			myaudio.play();
		});
	var myaudio = $("#myaudio")[0];
	$(".ad5 a")
		.mouseenter(function () {
			myaudio.play();
		});
});


!(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center',
		detach: false
	});

	// Nav.

	// Title Bar.
	$(
			'<div id="titleBar">' +
			'<a href="#navPanel" class="toggle"></a>' +
			'<span class="title">' + $('#logo h1').html() + '</span>' +
			'</div>'
		)
		.appendTo($body);

	// Panel.
	$(
			'<div id="navPanel">' +
			'<nav>' +
			$('#nav').navList() +
			'</nav>' +
			'</div>'
		)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});



	

	

	$('.slider').slick({
		fade:true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed:1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
});


$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});
	
	
});
