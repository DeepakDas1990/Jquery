$(function () {
    //$("li").remove();
    //$("input[type=email],input[type=submit]").remove();
    //$("form").children().not("input:text,textarea,br").remove();

    // var removedListItem = $("li").remove();
    // $("#content").append(removedListItem);

    // var detachedListItem = $("li").detach();
    // $("#detachedList").append(detachedListItem);

    /*
    difference between remove() and detach here is, if the removed part has any event handler, they will removed too.
    So it's better practice to use Detach() over Remove(). 
    */
   
    //$("p:first").empty();
    $(".red-box,.green-box,.blue-box").empty();
    /*
        empty() method only removes the content of the tag..not the tag itself.
     */
});
