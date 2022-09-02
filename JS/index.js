$(document).ready(function () {
  // main slide
  $(".mainWrap").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  //  arrival slide
  $(".arrivalSlide").slick({
    dots: true,
    infinite: true,
    speed: 200,
    cssEase: "linear",
    nextArrow: false,
    prevArrow: false,
  });

  // best item slide
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // header scroll event
  $(document).scroll(function () {
    const $scrollTop = $(window).scrollTop();
    const header = $("header");
    const headerCate = $("header .firstCate a");
    const headerIcon = $("header .userIcon i");
    const headerDarkLogo = $("header .logoDarkMode");
    const headerWhiteLogo = $("header .logoWhiteMode");
    const headerSearchBar = $("header .userBox input");

    if ($scrollTop > 0) {
      header.addClass("active");
      headerCate.addClass("active");
      headerIcon.addClass("active");
      headerDarkLogo.addClass("active");
      headerWhiteLogo.addClass("active");
      headerSearchBar.addClass("active");
    } else {
      header.removeClass("active");
      headerCate.removeClass("active");
      headerIcon.removeClass("active");
      headerDarkLogo.removeClass("active");
      headerWhiteLogo.removeClass("active");
      headerSearchBar.removeClass("active");
    }
  });

  // top button visible
  const $topBtn = $(".topBtn");
  $(window).scroll(function () {
    const bestItemHeight = $("#bestItem").outerHeight();
    const $scrollTop = $(window).scrollTop();

    if ($scrollTop >= bestItemHeight) {
      $topBtn.addClass("active");
    } else {
      $topBtn.removeClass("active");
    }
  });

  // top button click event
  $topBtn.click(function () {
    $("html,body").animate({ scrollTop: 0 });
  });
});
