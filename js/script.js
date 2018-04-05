$(document).ready(function () {
    $("#form").submit(function(event) {
        var textAreadata = $("#textarea").val().trim();
        if(textAreadata==""){
            $("#textarea").css("box-shadow","0 0 4px #811");
            event.preventDefault();
        }
    });
});


