$(document).ready(function () {
    // $("#formcheckbox").change(function() {
    //     var isChecked = $(this).prop("checked");
    //     if(isChecked){
    //         $(this).add("label[for='cb']").css("box-shadow","0 0 4px #181");
    //     }
    //     else{
    //         $(this).add("label[for='cb']").css("box-shadow","0 0 4px #811");
    //     }
    // });

    $("#selection").change(function() {
        //var selectedOption = $("#selection option:selected").text();
        var selectedOption = $(this).find(":selected").text();
        alert(selectedOption);
    });
});


