$(document).ready(function () {
    $("html").keydown(function (event) {
        console.log(event.which);
    });

    var arrow_Right = 39;

    $("html").keydown(function(event){
        if(event.which == arrow_Right){
            $(".blue-box").stop().animate({
                marginLeft: "+=10px"
            },50);
            //$(".blue-box").css("margin-left","+=10px");
        }
    });
});


