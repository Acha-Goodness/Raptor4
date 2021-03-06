(function ($) {
	("use strict");

	// meanmenu
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "992",
	});

	$(".side-info-close,.offcanvas-overlay").on("click", function () {
		$(".side-info").removeClass("info-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".side-toggle").on("click", function () {
		$(".side-info").addClass("info-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});

	// Search
	var $searchWrap = $(".search-wrap");
	var $navSearch = $(".nav-search");
	var $searchClose = $("#search-close");

	$(".search-trigger").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$(".search-close").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on("click", function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on("click", function (e) {
		e.stopPropagation();
	});

	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});
	/*------------------------------------
        Slider
	--------------------------------------*/
	if (jQuery(".slider-active").length > 0) {
		let sliderActive1 = ".slider-active";
		let sliderInit1 = new Swiper(sliderActive1, {
			
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 5000,
			},

			
			pagination: {
				el: ".slider-swiper-paginations",
				
				clickable: true,
			},

		
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	
	if (jQuery(".brand-active").length > 0) {
		let brand = new Swiper(".brand-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			
			loop: true,
			autoplay: {
				delay: 2000,
			},

			breakpoints: {
				500: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 5,
				},
			},
		});
	}

	
	if (jQuery(".portfolio-active").length > 0) {
		let portfolio = new Swiper(".portfolio-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			
			loop: true,
			autoplay: {
				delay: 5000,
			},
			
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1400: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			
			pagination: {
				el: ".portfolio-swiper-pagination",
				clickable: true,
			},

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			scrollbar: {
				el: ".swiper-scrollbar",
			},
		});
	}

	
	if (jQuery(".portfolio-slide").length > 0) {
		let portfolio2 = new Swiper(".portfolio-slide", {
			slidesPerView: 1,
			spaceBetween: 30,
			
			loop: false,
			autoplay: {
				delay: 5000,
			},

			
			pagination: {
				el: ".portfolio2-swiper-pagination",
				clickable: true,
			},

			
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			
			scrollbar: {
				el: ".swiper-scrollbar",
			},
			
			breakpoints: {
				778: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}

	
	if (jQuery(".testimonial-active").length > 0) {
		let testimonial = new Swiper(".testimonial-active", {
			slidesPerView: 1,
			spaceBetween: 0,
			
			loop: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			autoplay: {
				delay: 5000,
			},
			
			navigation: {
				nextEl: ".testimonial1-button-next",
				prevEl: ".testimonial1-button-prev",
			},
		});
	}

	
	if (jQuery(".testimonial-active-2").length > 0) {
		let testimonial2 = new Swiper(".testimonial-active-2", {
			slidesPerView: 1,
			spaceBetween: 200,
			
			loop: true,
			autoplay: {
				delay: 5000,
			},

			
			navigation: {
				nextEl: ".testimonial2-btn-next",
				prevEl: ".testimonial2-btn-prev",
			},
		});
	}
	

	if (jQuery(".testimonial-active-3").length > 0) {
		let swipertestimonial = new Swiper(".testimonial-active-3", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			infinite: false,
			autoplay: {
				delay: 5000,
			},

			
			navigation: {
				nextEl: ".testimonial-btn-next",
				prevEl: ".testimonial-btn-prev",
			},

			breakpoints: {
				768: {
					slidesPerView: 2,
				},
			},
		});
	}


	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});

	
	$(".popup-image").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	
	$(".grid").imagesLoaded(function () {
		var $grid = $(".grid").isotope({
		});
		
		$(".portfolio-button").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		
		$(".portfolio-button button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});

	
	$("#scrollToTop").on("click", function () {
		$("body, html").animate({ scrollTop: 0 }, 500);
		return false;
	});

	
	$.scrollUp({
		scrollName: "scrollUp", 
		topDistance: "300", 
		topSpeed: 300, 
		animation: "fade", 
		animationInSpeed: 200, 
		animationOutSpeed: 200, 
		scrollText: '<i class="fal fa-arrow-up"></i>', 
		activeOverlay: false, 
	});

	new WOW().init();

	jQuery(".odometer").appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});
})(jQuery);