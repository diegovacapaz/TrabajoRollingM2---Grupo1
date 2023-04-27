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

let index = 0,
	interval = 1000;

const rand = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
	star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
	star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

	star.style.animation = "none";
	star.offsetHeight;
	star.style.animation = "";
}

for (const star of document.getElementsByClassName("magic-star")) {
	setTimeout(() => {
		animate(star);

		setInterval(() => animate(star), 1000);
	}, index++ * (interval / 3))
}