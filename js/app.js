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



