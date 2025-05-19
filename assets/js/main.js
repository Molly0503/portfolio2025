const hamburger = $('.hamburger-button');

hamburger.on('click', function () {
  $('.header-menu').toggleClass('header-menu-active');
  hamburger.toggleClass('hamburger-button-open');
});

$(window).on('resize scroll', function () {
  $('.header-menu').removeClass('header-menu-active');
  hamburger.removeClass('hamburger-button-open');
});



$('.js-fadein').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('js-fadein-show');
    }
  },

  offset: '50%',
});


$('.carousel').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  fade: true,
});


$('#smarttab').smartTab({
  enableUrlHash: false
});


$('.accordion-title').on('click', function (e) {
  $(this).toggleClass('accordion-title-active');
  const content = $(this).next();
  content.slideToggle();
});


const backToTop = $('.back-to-top');
const position = 0;
const speed = 800;

backToTop.on('click', function () {

  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;

});



$('.fade-in-up').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $('.fade-in-up').addClass("animate__fadeInUp");
    }
  },
  offset: '90%',
});