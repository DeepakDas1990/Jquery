$(document).ready(function () {
    var flickrUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    $.getJSON(flickrUrl, {
        tags: "football",
        tagmode: "any",
        format: "json"
    }).done(function (data) {
        $.each(data.items, function (index, item) {
            console.log(item);
            $("<img>").attr("src", item.media.m).appendTo("#flicker");
            if (index == 3) {
                return false;
            }
        });
    }).fail(function () {
        alert("ajax call failed");
    });
});

