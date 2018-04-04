$(document).ready(function () {
    // var inputFields = $("input[type='text'], input[type='email'], textarea");
    // inputFields.focus(function(){
    //     $(this).css("box-shadow","0 0 8px #666");
    // });
    // inputFields.blur(function () {
    //     $(this).css("box-shadow","none");
    // });
    var textInput = $("input[type='text']"); 

    function CheckTextValidation(){
        var textInput = $("input[type='text']");    
        var text = textInput.val();
        if (text.length < 3) {
            textInput.css("box-shadow", "0 0 12px #C4200D");
        }
        else {
            textInput.css("box-shadow", "0 0 12px #139901");
        }
    }
    
    // textInput.focus(function () {
    //     CheckTextValidation();
    // });
    // textInput.blur(function () {
    //     CheckTextValidation();
    // });

    textInput.on("focus blur keydown",function(){
        CheckTextValidation();
    });

});


