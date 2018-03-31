$(document).ready(function () {
    var galleryImages = $(".gallery").find("img");
    galleryImages.css("width", "33%").css("opacity", "0.7");

    galleryImages.hover(function () {
        $(this).stop().fadeTo(500, 1);
    }
        , function () {
            $(this).stop().fadeTo(500, 0.7);
        });

    galleryImages.click(function () {
        var source = $(this).attr("src");
        var image = $("<img>").attr("src", source).css("width", "100%");
        $(".lightbox").empty().append(image).fadeIn(2000);
    });

    $(".lightbox").click(function() {
        $(this).stop().fadeOut();
    });
});


