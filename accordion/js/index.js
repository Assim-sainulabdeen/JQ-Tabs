$(document).ready(function() {
    $("a").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".content").slideUp(500) ;
      } else {
        $("a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(500);
        $(this).siblings(".content").slideDown(500);
      }
    });
  });
  
