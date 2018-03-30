$(function () {
    //$("li").replaceWith("<li>Replaced.</li>"); 
    //  $("li").replaceWith(function () {
    //      return "<li>Replaced With Function</li>";
    //  }); 
    //var firstListItem = $("li:first");
    //$("p:first").replaceWith(firstListItem);
    //$("p").replaceWith(firstListItem);

    var greenbox = $(".green-box");
    // $(".red-box").replaceWith(greenbox);
    // $(".blue-box").replaceWith(greenbox);
    //$(".red-box,.blue-box").replaceWith(greenbox);
    $(".red-box,.blue-box").replaceWith("<div class='green-box'>More Green</div>");
});
