$("#mybutton").click(function(){
    $("#myModal").addClass("display");
})

$(".close").click(function(){
    $("#myModal").removeClass("display");
})
$(".modal").click (function(event) {
    if ($("#myModal").hasClass("display")) {
        $("#myModal").removeClass("display");
    }
})
