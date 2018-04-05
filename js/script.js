$(document).ready(function () {
    var form = $("#form");

    getFastFeedback(form);

    form.submit(function (event) {
        var name = $("#name").val().trim();
        var password = $("#password").val().trim();
        var message = $("#message").val().trim();
        var checked = $("#checkbox").is(":checked");

        validateName(name, event);
        validatePassword(password, event);
        validateMessage(message, event);
        validateCheckBox(checked, event);
    });
});


function getFastFeedback(formElement) {
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function (event) {
        var name = $(this).val().trim();
        validateName(name, event);

        if (name.length > 1) {
            $(this).css({ "box-shadow": "0 0  8px #181", "border": "1px solid #181" });
        } else {
            $(this).css({ "box-shadow": "0 0  8px #811", "border": "1px solid #811" });
        }
    });

    passwordInput.blur(function (event) {
        var password = $(this).val().trim();
        validatePassword(password, event);

        if (password.length > 5 && /.*[0-9].*/.test(password)) {
            $(this).css({ "box-shadow": "0 0  8px #181", "border": "1px solid #181" });
        } else {
            $(this).css({ "box-shadow": "0 0  8px #811", "border": "1px solid #811" });
        }
    });

    messageInput.blur(function (event) {
        var message = $(this).val().trim();
        validateMessage(message, event);

        if (message.length > 0) {
            $(this).css({ "box-shadow": "0 0  8px #181", "border": "1px solid #181" });
        } else {
            $(this).css({ "box-shadow": "0 0  8px #811", "border": "1px solid #811" });
        }
    });

    checkboxInput.blur(function (event) {
        var isChecked = $(this).is(":checked");
        validateCheckBox(isChecked, event);

        if (isChecked) {
            $(this).css({ "box-shadow": "0 0  8px #181", "border": "1px solid #181" });
        } else {
            $(this).css({ "box-shadow": "0 0  8px #811", "border": "1px solid #811" });
        }
    });
}

function validateName(name, event) {
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


