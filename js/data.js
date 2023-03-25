var teamSwiper = new Swiper(".teamSwiper", {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 20,
  rewind: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

var count = $("#remain ol li").length;
$(".team-name span").text(count);
