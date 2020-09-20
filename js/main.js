$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '280px',
		appendArrows: $('.slider-arrow'),
		prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="23.5" fill="white" stroke="#005955"/><path d="M21 15L30 24L21 33" stroke="#005955" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn btn-juliet"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="23.5" fill="white" stroke="#005955"/><path d="M21 15L30 24L21 33" stroke="#005955" stroke-linecap="round" stroke-linejoin="round"/></svg><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1,
				}
			},
			{
			  breakpoint: 480,
			  settings: {
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1
			  }
			}
		  ]
	});
	$('.foundersSlider').slick({
        infinite: true,
        slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1,
				appendArrows: $('.foundersSlider-arrow'),
				prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="23.5" fill="white" stroke="#005955"/><path d="M21 15L30 24L21 33" stroke="#005955" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
				nextArrow: '<button id="next" type="button" class="btn btn-juliet"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="23.5" fill="white" stroke="#005955"/><path d="M21 15L30 24L21 33" stroke="#005955" stroke-linecap="round" stroke-linejoin="round"/></svg><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
			  }
			}
		  ]
	});
	$('.instrumentsSlider').slick({
        infinite: true,
        slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1,
				appendArrows: $('.instrumentsSlider-arrow'),
				prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="23.5" fill="white" stroke="#005955"/><path d="M21 15L30 24L21 33" stroke="#005955" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
				nextArrow: '<button id="next" type="button" class="btn btn-juliet"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="23.5" fill="white" stroke="#005955"/><path d="M21 15L30 24L21 33" stroke="#005955" stroke-linecap="round" stroke-linejoin="round"/></svg><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
			  }
			}
		  ]
	});

	$(function () {
		$('.md-trigger').on('click', function() {
			$('.md-modal').addClass('md-show');
			document.body.style.overflow = 'hidden';
		});

		$('.md-close').on('click', function() {
			$('.md-modal').removeClass('md-show');
			document.body.style.overflow = 'auto';
		});
	});

	$(function () {
		var videoSrc;
		videoSrc = $('#video').attr( "src" );
		$('.md-trigger1').on('click', function() {
			$('.md-modal1').addClass('md-show1');
			document.body.style.overflow = 'hidden';
			$("#video").attr("src", videoSrc);
		});

		$('.md-close1').on('click', function() {
			$('.md-modal1').removeClass('md-show1');
			document.body.style.overflow = 'auto';
			$(".md-modal1 iframe").attr("src", null);
		});
	});

	$(function () {
		$('.openPopup').on('click', function() {
			$('#menu').addClass('active');
			document.body.style.overflow = 'hidden';
		});
	});

	$(function () {
			$('.closePopup').on('click', function() {
				$('#menu').removeClass('active');
				var b = Object.values( $('.header') )[0];
				b.style.opacity = '0';
				document.body.style.overflow = 'auto';
				setTimeout( function(){
					var b = Object.values( $('.header') )[0];
					b.style.opacity = '1';
				}, 3000);
			});
	});

	$(function () {
			$('.closeX').on('click', function() {
			$('#menu').removeClass('active');
			document.body.style.overflow = 'auto';
		});
	});


	$(function () {
		var element = document.getElementById('phone');
		var maskOptions = {
			mask: '+38(000)000-00-00',
			lazy: true
		}
		var mask = new IMask(element, maskOptions);
	});

	$(function () {
		var element = document.getElementById('phone1');
		var maskOptions = {
			mask: '+38(000)000-00-00',
			lazy: true
		}
		var mask = new IMask(element, maskOptions);
	});

	$(function () {
		var element = document.getElementById('phone2');
		var maskOptions = {
			mask: '+38(000)000-00-00',
			lazy: true
		}
		var mask = new IMask(element, maskOptions);
	});

	$(function () {
		$('#modal1').on('hidden.bs.modal', function (e) {
			$('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
		});
	});

});