$(document).ready(function () {
    var PokeAPIUrl = "https://swapi.co/api/people/";

    $.getJSON(PokeAPIUrl).done(function (data) {
        $.each(data.results, function (index, result) {
            var characterName = result.name.charAt(0).toUpperCase() + result.name.slice(1);
            var link = $("<a>").attr("id", result.name).attr("href", "#").append($("<strong>").text(characterName));
            var par = $("<p>").html("Star Wars Character " + (index + 1) + " is ").append(link);

            link.click(function (event) {
                $.getJSON(PokeAPIUrl + index + 1).done(function (details) {
                    console.log(details);
                    var characterDetails = $("#characterDetails");
                    characterDetails.empty();
                    characterDetails.append($("<p>").text("Name: " + details.name));
                    characterDetails.append($("<p>").text("Height: " + details.height));
                    characterDetails.append($("<p>").text("Weight: " + details.mass));
                    characterDetails.append($("<p>").text("Hair Color: " + details.hair_color));
                    characterDetails.append($("<p>").text("Skin Color: " + details.skin_color));
                    characterDetails.css("background-color","#181")
                });
                event.preventDefault();    
            });
            $("#characterNames").append(par);
        });
    }).fail(function () {
        alert("Request to Star wars failed");
    });
});

