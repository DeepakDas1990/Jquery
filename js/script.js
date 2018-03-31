$(function () {
    var firstpara = $("p:first");
    // console.log(firstpara.text());
    // console.log(firstpara.html());
    // console.log($("p").html());
    // console.log($("p").text());
    //firstpara.text("<strong>Hello World !</div>");
    //firstpara.html("<strong>Hello World !</div>");

    firstpara.html(firstpara.html() + " This is a new sentence added.");
});
