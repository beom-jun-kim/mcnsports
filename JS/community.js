$(document).ready(function () {
  $(".tabComContent > div").hide();
  $(".tabComCate a")
    .click(function () {
      $(".tabComContent > div").hide().filter(this.hash).stop().show();
      $(".tabComCate a").removeClass("active");
      $(this).addClass("active");
    })
    .filter(":eq(0)")
    .click();

  $(".tabComCate a").click(function (e) {
    e.preventDefault();
  });

  $('.answer').hide();
  $('.question').click(function(){
    $('.answer').slideToggle();
  });
});

