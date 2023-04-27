let swiper = new Swiper(".miSwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 15,
		stretch: 0,
		depth: 300,
		modifier: 1,
		slideShadows: true,
	},
	loop: true,
});