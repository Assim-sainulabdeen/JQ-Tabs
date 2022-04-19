var modal = $("#myModal");

$("#mybutton").click(function(){
    modal.addClass("display");
})

$(".modal-btn").click(function(){
    modal.removeClass("display");
})
$(".modal").click (function() {
    if (modal.hasClass("display")) {
        modal.removeClass("display");
    }
})



