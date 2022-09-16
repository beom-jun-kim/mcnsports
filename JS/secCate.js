$(document).ready(function () {
  $(".listTabContent > div").hide();
  $(".listTabNavi a")
    .click(function () {
      $(".listTabContent > div").hide().filter(this.hash).stop().show();
      $(".listTabNavi a").removeClass("active");
      $(this).addClass("active");
    })
    .filter(":eq(0)")
    .click();

  $(".listTabNavi a").click(function (e) {
    e.preventDefault();
  });

  $(function () {
    $("#tab01 .productBox li").hide();
    $("#tab01 .productBox li").slice(0, 16).show();
    $(".more").click(function (e) {
      e.preventDefault();
      $("#tab01 .productBox li:hidden").slice(0, 8).show();
      if ($("#tab01 .productBox li:hidden").length === 0) {
        $(this).hide();
      }
    });
  });

  $(".resetBtn").click(function () {
    if ($("input").prop("checked")) {
      $("input[type='checkbox'].etc-color").prop("checked",true);
      $(".initBtn").prop("checked", true);
    } else {
      $("input[type='checkbox'].etc-color").prop("checked",false);
      $(".initBtn").prop("checked", false);
    }
  });
});
