
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

      $(document).scroll(function(){
        const header = $('header');
        const $scrollTop =$(window).scrollTop();
        const headerCate = $('header .firstCate a');
        const headerIcon = $('header .userIcon i');
        const headerDarkLogo = $('header .logoDarkMode');
        const headerWhiteLogo = $('header .logoWhiteMode');

        if($scrollTop > 0) {
          header.addClass('active');
          headerCate.addClass('active');
          headerIcon.addClass('active');
          headerDarkLogo.addClass('active');
          headerWhiteLogo.addClass('active');
        }else {
          header.removeClass('active');
          headerCate.removeClass('active');
          headerIcon.removeClass('active');
          headerDarkLogo.removeClass('active');
          headerWhiteLogo.removeClass('active');
        }
      });

      $(document).on('mousewheel', function(e){
        const wheel = e.originalEvent.wheelDelta;
        const header = $('header');

        if(wheel > 0) {
          header.removeClass('fixed');
        } else {
          header.addClass('fixed');
        }
      })

});

