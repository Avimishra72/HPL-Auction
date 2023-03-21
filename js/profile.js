var aucSwiper = new Swiper(".aucSwiper", {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 20,
  rewind: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".auc-next",
    prevEl: ".auc-prev",
  },
});
