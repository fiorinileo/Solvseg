//nav Toggle - select button and links
const navbarToggle = document.querySelector("#navbarToggle");
const navbar = document.querySelector("#main-navbar");
const servicesLink= document.getElementById("navbar__link--services");
//add event listener
navbarToggle.addEventListener("click", ()=>{
    navbar.classList.toggle('navbar-open');
});
navbar.addEventListener("click", () => {
	if(navbar.classList.contains('navbar-open')){
	navbar.classList.remove('navbar-open');
}
})



/* -----------------------MODAL-------------------*/

// Extraemos todos los botones de los modal hacia una constante
const btnModalCctv = document.getElementById("btn-modal-cctv");
const btnModalDoorbell = document.getElementById("btn-modal-doorbell");
const btnModalNetworking= document.getElementById("btn-modal-networking");
const btnModalTelephone = document.getElementById("btn-modal-telephone");
const btnModaDomotic = document.getElementById("btn-modal-domotic");
const btnModalAlarm = document.getElementById("btn-modal-alarm");
const btnModalSeguridadPrivada = document.getElementById("btn-modal-seguridadPrivada");
const btnModalAlarmaIncendio = document.getElementById("btn-modal-alarmaIncendio");
const btnModalVallado = document.getElementById("btn-modal-vallado");
const btnModalArmadoEquipos = document.getElementById("btn-modal-armadoEquipos");
const btnModalCercaElectrica = document.getElementById("btn-modal-cercaElectrica");
const btnModalMantenimiento = document.getElementById("btn-modal-mantenimiento");

//Le agregamos un Event Listener a todos los botones
btnModalCctv.addEventListener("click", )
btnModalDoorbell.addEventListener("click", )
btnModalNetworking.addEventListener("click", )
btnModalTelephone.addEventListener("click", )
btnModaDomotic.addEventListener("click", )
btnModalAlarm.addEventListener("click", )
btnModalSeguridadPrivada.addEventListener("click", )
btnModalAlarmaIncendio.addEventListener("click", )
btnModalVallado.addEventListener("click", )
btnModalArmadoEquipos.addEventListener("click", )
btnModalCercaElectrica.addEventListener("click", )
btnModalMantenimiento.addEventListener("click", )



function abrirModal(seccion){
	
	let modal = document.getElementById("Modal-cctv");
	let btn = document.getElementById("btn-modal-cctv");
	let span = document.getElementsByClassName("close")[0];
	let body = document.getElementsByTagName("body")[0];

	btn.onclick = function () {
		modal.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "visible";
	}

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


if(document.getElementById("btn-modal-cctv")){
	
	var modal = document.getElementById("Modal-cctv");
	var btn = document.getElementById("btn-modal-cctv");
	var span = document.getElementsByClassName("close")[0];
	var body = document.getElementsByTagName("body")[0];

	btn.onclick = function () {
		modal.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "visible";
	}

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
