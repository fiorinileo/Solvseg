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
