
const currentYear = new Date().getFullYear();
document.querySelector('#footeryear').innerHTML = currentYear;

new WOW().init();

$(document).ready(function () {
   $('.sliderbox').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1000,
      adaptiveHeight: true
   });

   $(window).on('scroll', function () {
      yPos = window.scrollY;
      if (window.innerWidth > 767) {
         shift = +315 - yPos * 0.15 + 'px';
         $('.bookmedia1 ').css('top', shift);
         shift2 = +1300 - yPos * 0.4 + 'px';
         $('.bookmedia2 ').css('top', shift2);
         shift3 = +500 - yPos * 0.4 + 'px';
         $('.bookmedia3 ').css('top', shift3);
      }
   });

   /* nav */
   $('.navbtn').click(function () {
      if ($('.navbox').hasClass('hidden')) {
         $(this).addClass('on');
         $('.navbox').removeClass('hidden');
      } else {
         $(this).removeClass('on');
         $('.navbox').addClass('hidden');
      }

   });

});

