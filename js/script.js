$(function () {
    $("#btn-hover").hover(function () {
        alert("button is hovered");
    });

    $(".green-box").hover(function () {
        $(this).text("I was Hovered");
    });

    var bluebox = $(".blue-box");

    // bluebox.mouseenter(function () {
    //     $(this).fadeTo(500, 0.8);
    // });

    // bluebox.mouseleave(function () {
    //     $(this).fadeTo(500, 1);
    // });

    // bluebox.mouseenter(function () {
    //     $(this).stop().fadeTo(500, 0.8);
    // });

    // bluebox.mouseleave(function () {
    //     $(this).stop().fadeTo(500, 1);
    // });


    //hover(mouseenter,mouseleave)
    bluebox.hover(function() {
        $(this).stop().fadeTo(500,0.7);
    },function() {
        $(this).stop().fadeTo(500,1);
    });

    // better practice to use stop() method
});
