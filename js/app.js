document.addEventListener("DOMContentLoaded", function() {
	$('#bars').on('click', function(e) {
	  e.preventDefault();
	  $('.menu').toggleClass('menu_active');
	  $('.content').toggleClass('content_active');
	  $('.bars img').slideToggle(0);
	});


    $('.week').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: false,
		  asNavFor: '.slider-button'
		});

		$('.slider-button').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.week',
		  dots: false,
		  focusOnSelect: true,
		  arrows: false,
		  responsive: [{

		      breakpoint: 600,
		        settings: {
			        slidesToShow: 2
			      }
		    }]
		});
   
});
