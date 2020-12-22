// sidebar toggle 
function toggleSidebar() {
	$(".primary_nav").toggleClass("toggleActive");
}



// banner slider
var swiper = new Swiper('.progrm_slider', {
	speed: 1000,
	spaceBetween: 20,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	}
});

// banner slider
var swiper = new Swiper('.banner_slider', {
	speed: 1000,
	spaceBetween: 30,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	keyboard: {
		enabled: true,
	},
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
});
