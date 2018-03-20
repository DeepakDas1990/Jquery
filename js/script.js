$(function () {
  $(".red-box").fadeTo(1000,0,function(){
    $(".green-box").fadeTo(1000,0,function(){
      $(".blue-box").fadeTo(1000,0,function () {
        $(".blue-box").fadeTo(1000,1,function () {
          $(".green-box").fadeTo(1000,1,function () {
            $(".red-box").fadeTo(1000,1);
          });
        });
      });
    });
  });
  // $(".red-box").fadeTo(1000,0,function(){
  //   $(".green-box").fadeTo(1000,0,function(){
  //     $(".blue-box").fadeTo(1000,0,function () {
  //       alert("Animation Finished");
  //     });
  //   });
  // });
});

/* 
call back funtions are executed only after parent function is executed.
but in case of delay(), user can change delay time according to it's choice.
*/