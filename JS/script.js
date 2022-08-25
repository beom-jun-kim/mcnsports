
$(document).ready(function(){
    $(".mainWrap").slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay:true,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(".arrivalSlide").slick({
        dots: true,
        infinite: true,
        speed: 200,
        cssEase: "linear",
        nextArrow:false,
        prevArrow:false,
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        loop : true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});

