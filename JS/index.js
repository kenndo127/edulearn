//Landing page side nav functions
function showMenu(){
  const menu = document.querySelector("#menuToggler");
  menu.style.display = 'flex';
}
function hideMenu(){
  const menu = document.querySelector("#menuToggler");
  menu.style.display = 'none';
}

//Owl Carousel Initializer
$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
    // loop:true,
    // margin:20,      // spacing between cards
    // nav:true,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     576:{
    //         items:2
    //     },
    //     768:{
    //         items:3
    //     },
    //     992:{
    //         items:4
    //     }
    // }
  });

});