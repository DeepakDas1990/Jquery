$(document).ready(function () {
    var PokeAPIUrl = "https://swapi.co/api/people/";

    $.getJSON(PokeAPIUrl).done(function (data) {
        $.each(data.results, function (index, result) {
            var characterName = result.name.charAt(0).toUpperCase() + result.name.slice(1);
            var par = $("<p>").html("Star Wars Character " + (index + 1) + ":   " + characterName);
            $("#characterNames").append(par);
        });
    }).fail(function () {
        alert("Request to Star wars failed");
    }).always(function() {
        console.log("Star wars is awesome");
    });
});

