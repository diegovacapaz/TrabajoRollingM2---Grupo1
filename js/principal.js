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

// ------------------- Mostrar juegos desde local storage ------------------- //

//Obtener cuenta activa
let cuentaActiva = localStorage.getItem("cuentaActiva");
if(cuentaActiva !== null){
    cuentaActiva = JSON.parse(cuentaActiva);
}

//Obtener cuentas
let cuentas = localStorage.getItem("cuentas");
if(cuentas === null){
    cuentas = [];
    const cuentaAdmin = new Cuenta("admin","admin@admin.com","1234",true);
    cuentas.push(cuentaAdmin);
    localStorage.setItem("cuentas",JSON.stringify(cuentas));
}
else{
    cuentas = JSON.parse(cuentas);
}


//  Obtener la cadena JSON de juegos desde el localStorage
let juegosString = localStorage.getItem('tablaJuegoStorage');

// Convertir la cadena en un objeto
let juegos = JSON.parse(juegosString);

// Obtener el elemento contenedor del catálogo
let catalogo = document.getElementById('catalogue');

// Recorrer el array de juegos
juegos.forEach(function (juego) {
	juego = JSON.parse(juego);
	// Crear los elementos HTML necesarios
	let gameCard = document.createElement('div');
	gameCard.className = 'game-card';

	let contentGameCard = document.createElement('div');
	contentGameCard.className = 'content-game-card';

	let imgBx = document.createElement('div');
	imgBx.className = 'imgBx';

	let gameImg = document.createElement('img');
	gameImg.src = juego.url;

	let contentBx = document.createElement('div');
	contentBx.className = 'contentBx';

	let gameName = document.createElement('h3');
	gameName.innerHTML = `${juego.nombre}<br><span>${juego.genero.toUpperCase()}</span><br>$${juego.precio}`;

	let ul = document.createElement('ul');
	ul.className = 'sci';

	let liCart = document.createElement('li');
	liCart.style = '--i:1';

	let aCart = document.createElement('a');

	let cartIcon = document.createElement('i');
	cartIcon.className = 'cart fas fa-shopping-cart';
	cartIcon.setAttribute('aria-hidden', 'true');

	let liLike = document.createElement('li');
	liLike.style = '--i:1';

	let aLike = document.createElement('a');

	let likeIcon = document.createElement('i');
	if(cuentaActiva && cuentaActiva.favoritos.find(juegoFav => JSON.parse(juegoFav).IdJuego === juego.IdJuego)){
		likeIcon.className = 'fas fa-heart like liked';
	}
	else if(cuentaActiva){
		likeIcon.className = 'fas fa-heart like';
	}
	else{
		likeIcon.className = 'bi bi-heartbreak-fill like';
		likeIcon.setAttribute('title', 'Inicia Sesion para añadir este juego a favoritos');
	}
	likeIcon.setAttribute('aria-hidden', 'true');
	likeIcon.dataset.idLike = `${juego.IdJuego}`;

	// Agregar los elementos al árbol DOM
	aCart.appendChild(cartIcon);
	liCart.appendChild(aCart);

	aLike.appendChild(likeIcon);
	liLike.appendChild(aLike);

	ul.appendChild(liCart);
	ul.appendChild(liLike);

	imgBx.appendChild(gameImg);

	contentBx.appendChild(gameName);

	contentGameCard.appendChild(imgBx);
	contentGameCard.appendChild(contentBx);

	gameCard.appendChild(contentGameCard);
	gameCard.appendChild(ul);

	catalogo.appendChild(gameCard);
});



// Funcionalidad del Like
const like = document.querySelectorAll('.like');
like.forEach(like => {
	like.addEventListener("click", () => {
		if(cuentaActiva){
			let id = like.dataset.idLike;
			let juego = juegos.find(juego => JSON.parse(juego).IdJuego === id);
			if(like.classList.contains("liked")){
				cuentaActiva.favoritos.splice(cuentaActiva.favoritos.findIndex(juego => juego.IdJuego === id),1);
			}
			else{
				cuentaActiva.favoritos.push(juego);
			}
			localStorage.setItem("cuentaActiva",JSON.stringify(cuentaActiva));
			cuentas.splice(cuentas.findIndex(cuenta => cuenta.usuario === cuentaActiva.usuario),1,cuentaActiva);
			localStorage.setItem("cuentas",JSON.stringify(cuentas));
			like.classList.toggle('liked');
		}
	});
});

// Funcionalidad del carrito 
const carts = document.querySelectorAll('.cart')
carts.forEach(cart => {
	cart.addEventListener('click', () => {
		cart.classList.toggle('cart-added');
	});
});

// Funcionalidad del efecto de los botones
let buttons = document.querySelectorAll('.magic-btn a, .magic-btn2 a');
const sensitivity = 0.7; // Factor de sensibilidad (ajusta este valor según tus preferencias)

buttons.forEach(function (btn) {
	let x = 0;

	btn.addEventListener('mousemove', function (e) {
		let rect = e.target.getBoundingClientRect();
		x = (e.clientX - rect.left) / rect.width * sensitivity;
		requestAnimationFrame(animateButton);
	});

	function animateButton() {
		btn.style.setProperty('--x', `${x * 360}deg`);
	}
});