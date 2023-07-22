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
    } else {
      $(".navbar.navbar-light").css("background-color", "transparent");

      $(".navbar.navbar-light .nav-link").addClass("nav-link-black");
      $(".navbar.navbar-light .navbar-brand img").attr(
        "src",
        "images/logo-dark.svg"
      );
    }
  });

  // CAROUSEL
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<i class='bi bi-chevron-left'></i>",
      "<i class='bi bi-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      992: {
        items: 3,
        loop: true,
      },
    },
  });
});
