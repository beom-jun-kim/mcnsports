$(document).ready(function () {
  $(".secWrapBox").hide();
  $("header .firstCate").mouseover(function () {
    $(this).children(".secWrapBox").stop().slideDown(300);
  });

  $("header .firstCate").mouseleave(function () {
    $(this).children(".secWrapBox").stop().slideUp(300);
  });

  $(".searchBox").hide();
  $(".userIcon .xi-search").click(function () {
    $(".searchBox").stop().slideToggle(300);
  });
});

// header scroll event_2
$(function () {
  let scrolltop_before = 0;
  let scrolltop_after = 0;
  function fn_evt_scroll(e) {
    const header = $("header");
    scrolltop_after = document.documentElement.scrollTop;
    if (scrolltop_before > scrolltop_after) {
      header.removeClass("fixed");
    } else {
      header.addClass("fixed");
    }
    scrolltop_before = document.documentElement.scrollTop;
  }
  $(window).on("scroll", fn_evt_scroll);
});
