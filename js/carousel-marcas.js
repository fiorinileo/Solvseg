
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