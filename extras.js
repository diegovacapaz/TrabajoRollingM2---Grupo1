//Animacion del slider/carrousel de la pagina principal
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


//Animacion de las estrellas de la pagina principal
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

// funcion para cambiar el tema de la pagina
const icon = document.getElementById("icon");
const header = document.querySelector(".header");

icon.onclick = function () {
	document.body.classList.toggle("light-theme");
	if (document.body.classList.contains("light-theme")) {
		icon.src = "img/sun.png";
		header.style.backgroundImage = "url(./img/bg-light.png)";
	} else {
		icon.src = "img/moon.png";
		header.style.backgroundImage = "url(./img/bg-dark.jpg)";
	}
}

// Establece la imagen de fondo inicial dependiendo del tema
if (document.body.classList.contains("light-theme")) {
	header.style.backgroundImage = "url(./img/bg-light.png)";
} else {
	header.style.backgroundImage = "url(./img/bg-dark.jpg)";
}