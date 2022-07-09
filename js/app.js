//nav Toggle - select button and links
const navbarToggle = document.querySelector("#navbarToggle");
const navbar = document.querySelector("#main-navbar");

//add event listener
navbarToggle.addEventListener("click", ()=>{
    navbar.classList.toggle('navbar-open');
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0;i<subMenuBtn.length;i++){
	subMenuBtn[i].addEventListener("click", function(){
		if(window.innerWidth < 920){
			const subMenu = this.nextElementSibling;
			const height = subMenu.scrollHeight;

			if(subMenu.classList.contains("desplegar")){
				subMenu.classList.remove("desplegar");
				subMenu.removeAttribute("style");
			}else{
				subMenu.classList.add("desplegar");
				subMenu.style.height = height + "px";
			}
		}
	});
}

