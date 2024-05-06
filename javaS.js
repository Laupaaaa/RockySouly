const menu = document.querySelector('.menu');
const abrirMenu = document.querySelector('.abrirMenu');
const preguntas = document.querySelectorAll(".preguntando");


function toggleMenu() {
	menu.classList.toggle('menuCerrado');
}
abrirMenu.addEventListener('click', toggleMenu);

preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', () => {
		cerraRespuesta(); 
		pregunta.nextElementSibling.classList.add('verRespuestas');
	}); 
});
function cerraRespuesta() {
	preguntas.forEach((pregunta) => {
		pregunta.nextElementSibling.classList.remove('verRespuestas')
	});
}


