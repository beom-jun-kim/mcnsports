$(document).ready(function () {
  $(".listTabContent > div").hide();
  $(".listTabNavi a")
    .click(function () {
      $(".listTabContent > div").hide().filter(this.hash).stop().fadeIn();
      $(".listTabNavi a").removeClass("active");
      $(this).addClass("active");
    })
    .filter(":eq(0)")
    .click();

  $(".listTabNavi a").click(function(e){
    e.preventDefault();
  });
});
