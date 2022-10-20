$(document).ready(function () {
  // Owl Slider Call
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    margin: 20,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1199: {
        items: 4,
      },
    },
  });
});
