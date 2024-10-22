$(document).ready(function () {
  $(".sub").hide();
  $(".gnb-bg").hide(); // 배경도 숨김

  $(".main").hover(
    function () {
      if ($(this).find(".sub").length) {
        $(this).find(".sub").stop(true, true).slideDown(200); 
        $(".gnb-bg").stop(true, true).slideDown(200); 
      }
    },
    function () {
      if ($(this).find(".sub").length) {
        $(this).find(".sub").stop(true, true).slideUp(200); 
        $(".gnb-bg").stop(true, true).slideUp(200); 
      }
    }
  );
});
