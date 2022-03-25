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


window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		scrollLock: false,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 533,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
				// screens greater than >= 1024px
				breakpoint: 1024,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3
				}
			  },{
			  // screens greater than >= 1024px
			  breakpoint: 1440,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista--marcas'), {
		slidesToShow: 2,
		slidesToScroll: 1,
		scrollLock: false,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 515,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},{
				// screens greater than >= 1024px
				breakpoint: 775,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  },{
				// screens greater than >= 1024px
				breakpoint: 1024,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 5
				}
			  },{
			  // screens greater than >= 1024px
			  breakpoint: 1240,
			  settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			  }
			}
		]
	});
});