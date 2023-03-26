var aucSwiper = new Swiper(".aucSwiper", {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 50,
  rewind: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
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
