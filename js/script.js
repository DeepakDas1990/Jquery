$(function () {
  // find() will get all the children , where as children() will get the immediate children

  //$("#list").find("li").css("background-color","rgba(180,180,30,0.8)");
  //$("#list").children("li").css("background-color","rgba(180,180,30,0.8)");

  //parents will get all the parent elements where as parent will get only the immediate parent.

  //$("#list").parents("div").css("background-color","rgba(180,180,30,0.8)");
  //$("#list").parents("body").css("background-color","rgba(180,180,30,0.8)");
  //$("#list").parent().css("background-color","rgba(180,180,30,0.8)");

  //$("#list").siblings().css("background-color","rgba(180,180,30,0.8)");
  //$("#list").siblings(":header").css("background-color","rgba(180,180,30,0.8)");
  $("#list").prev().css("background-color","rgba(180,180,30,0.8)");
  $("#list").next().css("background-color","rgba(180,180,30,0.8)");
});
