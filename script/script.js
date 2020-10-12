$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $("#left-sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4,
    dots: false,
    nav: true,
    navText: [
      "<div class='btn-next'><i class='fas fa-chevron-circle-left fa-3x'></i></div>",
      "<div class='btn-prev'> <i class='fas fa-chevron-circle-right fa-3x'></i></div>",
    ]
  });

  $(".btn-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".btn-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $("#dismiss, .overlay").on("click", function () {
    // hide sidebar
    $("#sidebar").removeClass("active");
    // hide overlay
    $(".overlay").removeClass("active");
    // hide left-sidebar
    $("#left-sidebar").removeClass("active");
  });

  $("#sidebarCollapse").on("click", function () {
    // open sidebar
    $("#sidebar").addClass("active");
    // fade in the overlay
    $(".overlay").addClass("active");
    $(".collapse.in").toggleClass("in");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });

  $(".acc-nav").on("click", function () {
    // open left sidebar
    $("#left-sidebar").addClass("active");

  });

  // Account top navbar

  $(".top-navbar-account-item").on("click", function (){
    $(".top-navbar-account-item").removeClass("active");
    $(this).addClass("active");
  })
});