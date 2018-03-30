$(function () {
    // var specialLink = $("#special-link");
    // console.log(specialLink.attr("href"));
    // specialLink.attr("href","https://github.com/DeepakDas1990/Jquery");

    // var checkbox = $("input:checkbox");
    // console.log(checkbox.prop("checked"));
    // console.log(checkbox.attr("checked"));

    var textInput = $("input:text");
    console.log(textInput.val());
    var rangeInput = $("input[type='range']");
    console.log(rangeInput.val());
    
    textInput.val("Pravakar Das");
    rangeInput.val("50");

    /**
     * Difference between prop() and attr() is, prop will load the current state of the property, 
     * where as attr() will always load the first state of the property. 
     */
});
