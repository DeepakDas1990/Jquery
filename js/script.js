$(document).ready(function () {
    var ErrorCounter = 0;

    $("#form").submit(function (event) {
        ErrorCounter = 0;
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checkbox").is(":checked");

        validateName(name, ErrorCounter);
        validatePassword(password, ErrorCounter);
        validateMessage(message, ErrorCounter);
        validateCheckBox(checked, ErrorCounter);

        if (ErrorCounter > 0) {
            event.preventDefault();
        }
    });

    function validateName(name) {
        if (name.length > 1) {
            $("#name-feedback").text("");
        } else {
            $("#name-feedback").text("Please Enter at lease two characters");
            ErrorCounter++;
        }
    };

    function validatePassword(password) {
        if (password.length > 5) {
            $("#password-feedback").text("");
        } else {
            $("#password-feedback").text("Please Enter at least 6 characters");
            ErrorCounter++;
        }
    }

    function validateMessage(message) {
        if (message.length > 10) {
            $("#message-feedback").text("");
        } else {
            $("#message-feedback").text("Please Enter at least 10 characters");
            ErrorCounter++;
        }
    }

    function validateCheckBox(checked) {
        if (checked) {
            $("#checkbox-feedback").text("");
        } else {
            $("#checkbox-feedback").text("Please Check the Checkbox");
            ErrorCounter++;
        }
    }

});


