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

    if ($scrollTop > 0) {
      header.addClass("active");
      headerCate.addClass("active");
      headerIcon.addClass("active");
      headerDarkLogo.addClass("active");
      headerWhiteLogo.addClass("active");
    } else {
      header.removeClass("active");
      headerCate.removeClass("active");
      headerIcon.removeClass("active");
      headerDarkLogo.removeClass("active");
      headerWhiteLogo.removeClass("active");
    }
  });

  // header scroll event_2
  $(document).on("mousewheel", function (e) {
    const wheel = e.originalEvent.wheelDelta;
    const header = $("header");

    if (wheel > 0) {
      header.removeClass("fixed");
    } else {
      header.addClass("fixed");
    }
  });

  // header category event
  $(".secWrapBox").hide();
  $(".firstCate").mouseover(function () {
    $(this).children(".secWrapBox").stop().slideDown(300);
  });

  $(".firstCate").mouseleave(function () {
    $(this).children(".secWrapBox").stop().slideUp(300);
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
  $topBtn.click(function(){
    $('html,body').animate({scrollTop : 0});
  });

});
