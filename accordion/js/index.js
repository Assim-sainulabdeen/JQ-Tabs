$(document).ready(function() {
    $("a").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".content").stop(true).slideUp(500);
        $(this).children(".up").removeClass("sp col")
      } else {
        $("a").removeClass("active");
        $("a").children(".up").removeClass("sp col")
        $(this).addClass("active");
        $(".content").stop(true).slideUp(500);
        $(this).siblings(".content").stop(true).slideDown(500); 
        $(this).children(".up").addClass("sp col") 
      }
    });
  });
  
