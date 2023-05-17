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

// Boton de filtro de generos
const btnFilter = document.querySelector('.icon-filter');
btnFilter.addEventListener('click', () => {
	const containerFilter = document.querySelector('.container-filters')

	containerFilter.classList.toggle('active')
})

// Botón para cerrar el filtro
const btnCloseFilter = document.querySelector('.close-filter');
btnCloseFilter.addEventListener('click', () => {
	const containerFilter = document.querySelector('.container-filters');
	containerFilter.classList.remove('active');
});

// ------------------- Mostrar juegos desde local storage ------------------- //

// Obtener la cadena JSON de juegos desde el localStorage
let juegosString = localStorage.getItem('tablaJuegoStorage');

// Convertir la cadena en un objeto
let juegos = JSON.parse(juegosString);

// Obtener el elemento contenedor del catálogo
let catalogo = document.getElementById('catalogue');

// Función para mostrar los juegos en el catálogo
function mostrarJuegos(juegos) {
	// Limpiar el catálogo
	catalogo.innerHTML = '';

	// Recorrer los juegos y crear las cards correspondientes
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
		gameName.innerHTML = `${juego.nombre}<br><span>${juego.genero}</span><br>$${juego.precio}`;

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
		likeIcon.className = 'fas fa-heart like';
		likeIcon.setAttribute('aria-hidden', 'true');

		// Agregar los elementos al árbol DOM
		aCart.appendChild(cartIcon);
		liCart.appendChild(aCart);

		aLike.appendChild(likeIcon);
		liLike.appendChild(aLike);

		ul.appendChild(liCart);
		ul.appendChild(liLike);

		imgBx.appendChild(gameImg);

		// Capitalizar la primera letra del género
		const generoCapitalizado = juego.genero.charAt(0).toUpperCase() + juego.genero.slice(1);

		contentBx.appendChild(gameName);

		gameName.innerHTML = `${juego.nombre}<br><span>${generoCapitalizado}</span><br>$${juego.precio}`;

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
			like.classList.toggle('liked');
		});
	});

	// Funcionalidad del carrito 
	const carts = document.querySelectorAll('.cart')
	carts.forEach(cart => {
		cart.addEventListener('click', () => {
			cart.classList.toggle('cart-added');
		});
	});
}

// Mostrar todos los juegos en el catálogo
mostrarJuegos(juegos);

// Funcion del filtrado de genero
function obtenerGenerosUnicos(juegos) {
	const generos = [];
	juegos.forEach(function (juego) {
		juego = JSON.parse(juego); // Convertir la cadena JSON en un objeto JavaScript
		generos.push(juego.genero);
	});
	const generosUnicos = [...new Set(generos)];
	return generosUnicos;
}

const generosUnicos = obtenerGenerosUnicos(juegos);
const filterByGender = document.querySelector('.filter-by-gender');

generosUnicos.forEach(genero => {
	const groupTypeContainer = document.createElement('div');
	groupTypeContainer.className = 'group-type';

	const input = document.createElement('input');
	input.type = 'checkbox';
	input.id = genero;
	input.name = 'genero';
	groupTypeContainer.appendChild(input);

	const label = document.createElement('label');
	label.htmlFor = genero;

	// Capitalizar la primera letra del género
	const generoCapitalizado = genero.charAt(0).toUpperCase() + genero.slice(1);
	label.textContent = generoCapitalizado;

	groupTypeContainer.appendChild(label);

	// Agregar el evento de click al checkbox para filtrar los juegos
	input.addEventListener('click', function () {
		// Obtener los juegos filtrados por categoría
		const juegosFiltrados = juegos.filter(function (juego) {
			juego = JSON.parse(juego);
			return juego.genero === genero;
		});

		// Si el checkbox está desmarcado, mostrar todos los juegos
		if (!input.checked) {
			mostrarJuegos(juegos);
		} else {
			// Mostrar los juegos filtrados en el catálogo
			mostrarJuegos(juegosFiltrados);
		}
	});

	filterByGender.appendChild(groupTypeContainer);
});

// Obtener el elemento de búsqueda y el botón de búsqueda
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Agregar evento de input al campo de búsqueda
searchInput.addEventListener('input', function () {
	const searchTerm = searchInput.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas

	// Filtrar los juegos por el término de búsqueda en el nombre del juego
	const juegosFiltrados = juegos.filter(function (juego) {
		juego = JSON.parse(juego);
		const nombre = juego.nombre.toLowerCase();
		return nombre.includes(searchTerm);
	});

	// Mostrar los juegos filtrados en el catálogo
	mostrarJuegos(juegosFiltrados);
});

// Agregar evento de submit al formulario de búsqueda
searchButton.addEventListener('click', function (event) {
	event.preventDefault(); // Evitar que el formulario se envíe
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