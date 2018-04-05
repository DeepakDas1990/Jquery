$(document).ready(function () {
    $("#form").submit(function (event) {
        var name = $("#name").val().trim();
        var password = $("#password").val().trim();
        var message = $("#message").val().trim();
        var checked = $("#checkbox").is(":checked");

        validateName(name, event);
        validatePassword(password, event);
        validateMessage(message, event);
        validateCheckBox(checked, event);

    });

    function validateName(name,event) {
        if (name.length > 1) {
            $("#name-feedback").text("");
        } else {
            $("#name-feedback").text("Please Enter at lease two characters");
            event.preventDefault();
        }
    };

    function validatePassword(password) {
    if (password.length > 5 && /.*[0-9].*/.test(password)) {
            $("#password-feedback").text("");
        } else {
            $("#password-feedback").text("Password must contain at least 6 characters and a number");
            event.preventDefault();
        }
    }

    function validateMessage(message) {
        if (message.length > 0) {
            $("#message-feedback").text("");
        } else {
            $("#message-feedback").text("Please Enter a message");
            event.preventDefault();
        }
    }

    function validateCheckBox(checked) {
        if (checked) {
            $("#checkbox-feedback").text("");
        } else {
            $("#checkbox-feedback").text("Please Check the Checkbox");
            event.preventDefault();
        }
    }

});


