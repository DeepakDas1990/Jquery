$(document).ready(function () {
    var i = 0;
    var images = [
        "images/laptop-mobile_small.jpg",
        "images/laptop-on-table_small.jpg",
        "images/people-office-group-team_small.jpg",
    ];
    var galleryimage = $(".gallery").find("img");

    function changeImage() {
        i = (i + 1) % images.length;
        galleryimage.fadeOut(function () {
            galleryimage.attr("src", images[i]).fadeIn();
        });
    }
    galleryimage.on("click", changeImage);
});


