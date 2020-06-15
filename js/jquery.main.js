$(document).ready(function(){
   $('.video-slider').slick();
   $('.logo-slider').slick({
   		slidesToShow: 8,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 570,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 20,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
   });
});