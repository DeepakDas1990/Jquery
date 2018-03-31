$(document).ready(function () {
    $("img").css("display", "none");
    // one disadvantage of event handler is, they will not applicable on elements which are added dynamically.
    // below code is an example
    // $("p").on("click", function () {
    //     $(this).slideUp();
    // });
    // $("#content").append("<p>This is dynamically added paragraph.</p>");

    //Solution is delegate events.
    // $("#content").on("click", "p", function () {
    //     $(this).slideUp();
    // });
    // $("#content").append("<p>This is dynamically added paragraph.</p>");

    $("body").on("mouseenter", "li li", function () {
        $(this).css("color","Green");
    });
    $("body").on("mouseleave", "li li", function () {
        $(this).css("color","Black");
    });
});


