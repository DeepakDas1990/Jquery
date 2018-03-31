$(document).ready(function () {
    $("#btn-click").click({
        user: "Deepak",
        domain: "deepak.b@sourceedge.com"
    }, function (event) {
        greetUser(event.data);
    });

    function greetUser(eventdata) {
        var username = eventdata.user || "Anonymous";
        var domain = eventdata.domain || "example.com";
        alert("welcome back " + username + " from " + domain);
    }
});


