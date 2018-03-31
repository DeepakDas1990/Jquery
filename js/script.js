$(function () {
    //    $("#btn-hover").hover(function () {
    //        alert("button is hovered");
    //    });

    $(".green-box").hover(function () {
        $(this).text("I was Hovered");
    });

    /**
     * while hovering, hover event is executed twice, while enter and while leaving the elment.
     */
});
