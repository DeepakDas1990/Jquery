$(function () {
   $("#btn-click").click(function (event) {
       console.log(event);
       alert('Button was Clicked');
   });
   $(".red-box").click(function () {
       alert("Red box is clicked");
       $(this).fadeTo(1000,0.5);
   });
   $(".red-box").click();
   /**
    * $(".red-box").click();
    * by writing this code, it will automatically invoke the click handler, while page load.
    */
});
