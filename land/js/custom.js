
   $(document).ready(function() {
      $("#menu_mob").mmenu({});
	  var api = $("#menu_mob").data( "mmenu" );
	  api.bind('open:finish', function(){
		  $('.hamburger').addClass('is-active');
	  }).bind('close:finish', function(){
		   $('.hamburger').removeClass('is-active');
	  });
	
$('.slide').slick({
	 dots: true,
	 arrows: false,
	 infinite: true
});
   });
$(window).on('load', function () {
     var $preloader = $('#p_prldr');
     $preloader.delay(500).fadeOut('slow');
}); 
