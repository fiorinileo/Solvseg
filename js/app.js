//nav Toggle - select button and links
const navbarToggle = document.querySelector("#navbarToggle");
const navbar = document.querySelector("#main-navbar");
const servicesLink= document.getElementById("navbar__link--services");
//add event listener
navbarToggle.addEventListener("click", ()=>{
    navbar.classList.toggle('navbar-open');
	navbarToggle.classList.toggle('is-active');
});
navbar.addEventListener("click", () => {
	if(navbar.classList.contains('navbar-open')){
	navbar.classList.remove('navbar-open');
	navbarToggle.classList.toggle('is-active');
}
})



/* -----------------------MODAL-------------------*/

function abrirModal(seccion,indice){
	
	let modal = document.getElementById("Modal-"+seccion);
	let btn = document.getElementById("btn-modal"+seccion);
	let span = document.getElementsByClassName("close")[indice];
	let body = document.getElementsByTagName("body")[0];
	
		modal.style.display = "block";
		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";


	span.onclick = function() {
		modal.style.display = "none";
		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";

			body.style.position = "inherit";
			body.style.height = "auto";
			body.style.overflow = "visible";
		}
	}
}