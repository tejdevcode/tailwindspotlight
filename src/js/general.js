
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
      yPos = window.pageYOffset;
      shift = +315 - yPos * 0.15 + 'px';
      $('.bookmedia1 ').css('top', shift);
      shift2 = +1300 - yPos * 0.4 + 'px';
      $('.bookmedia2 ').css('top', shift2);
      shift3 = +1300 - yPos * 0.4 + 'px';
      $('.bookmedia3 ').css('top', shift3);
   });
});

