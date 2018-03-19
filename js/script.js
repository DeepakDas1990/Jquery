$(function () {
  $(".blue-box").animate({
    marginLeft: "+=200px",
    fontSize: "0px",
    opacity: "0",
    height: "25px",
    width: "25px",
    marginTop: "25px"
  }, 1000);

  $("p").animate({
    fontSize: "20px"
  },1000);
});