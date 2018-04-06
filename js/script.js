$(document).ready(function () {
    $("#code").load("js/script.js", function (response, status) {
        if (status == "error") {
            alert("could not find  script.js");
        }
        console.log(response);
    });
});

