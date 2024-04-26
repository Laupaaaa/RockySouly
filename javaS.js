const menu = document.querySelector('.menu');
const abrirMenu = document.querySelector('.abrirMenu');

function toggleMenu() {
	menu.classList.toggle('menuCerrado');
}

abrirMenu.addEventListener('click', toggleMenu);
