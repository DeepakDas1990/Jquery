$(function () {
    $(".gallery").css("display","none"); 

    var redbox = $(".red-box");
    console.log(redbox.css("width"));
    console.log(redbox.width());

    redbox.css("background-color","#AA7700");
    $("p").css("font-size","18px");

    redbox.css("width","+=20px");   

    var properties = $("p").css(["font-size","line-height","color"]);
    console.log(properties);
    console.log(properties["font-size"]);

    redbox.css("user-select","none");

    redbox.css("user-select",function () {
        return "none";
    })
});
