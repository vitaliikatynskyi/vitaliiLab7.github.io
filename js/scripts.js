
$( function() {
    $( "#accordion" ).accordion();
} );

  
  jQuery(document).ready(function(){ 
    jQuery("#gallery").unitegallery(); 
  }); 

$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoplayTimeout: 1000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

$( function() {
     $( "#tabs" ).tabs();
} );

$( function() {
    $( "#datepicker" ).datepicker();
} );

		
