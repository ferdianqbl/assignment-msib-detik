$(document).ready(function () {
  // Closes responsive menu when a scroll trigger link is clicked
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler--nav").toggleClass("toggler-active");
  });

  // set nav bg style on scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50)
      $(".navbar").css("background-color", "#232340");
    else $(".navbar").css("background-color", "transparent");

    if ($(window).scrollTop() > 50) {
      $(".navbar.navbar-light").css("background-color", "#232340");
      $(".navbar.navbar-light .nav-link").removeClass("nav-link-black");
      $(".navbar.navbar-light .navbar-brand img").attr(
        "src",
        "images/logo.svg"
      );
      $(".navbar.navbar-light .navbar-toggler-icon").removeClass(
        "navbar-toggler-icon-dark"
      );
    } else {
      $(".navbar.navbar-light").css("background-color", "#f5f5f5");

      $(".navbar.navbar-light .nav-link").addClass("nav-link-black");
      $(".navbar.navbar-light .navbar-brand img").attr(
        "src",
        "images/logo-dark.svg"
      );
      $(".navbar.navbar-light .navbar-toggler-icon").addClass(
        "navbar-toggler-icon-dark"
      );
    }
  });

  // CAROUSEL
  $(".owl-carousel").owlCarousel({
    rewind: true,
    center: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    center: true,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      567: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
});
