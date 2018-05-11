jQuery(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
	//Lazy loading
	lazy: true,
	effect: 'coverflow',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
	
  });
  
  /* pause all video when slide change starts */
  mySwiper.on('slideChange', function () { 
	jQuery( "video" ).each(function() {
    this.pause();
	});
   });
  /*play current video when slide change ends */
  mySwiper.on('slideChangeTransitionEnd', function () { 
	jQuery( "div.swiper-slide-active" ).find( "video" ).each(function() {
    this.play();
	});
   });
   
   });