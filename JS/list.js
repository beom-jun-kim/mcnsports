// new
$(".newSlider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  nextArrow: false,
  prevArrow: false,
});

// 카테고리별
$(".cateDivideSlider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  nextArrow: false,
  prevArrow: false,
  slidesToShow: 3,
});

// 액티비티별
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.03,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
});
