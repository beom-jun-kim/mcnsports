$(document).ready(function () {
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
    cssEase: "ease-out",
  });

  // hot
  var swiperPrdList = new Swiper("#swiperPrdList .swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      snapOnRelease: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
});
