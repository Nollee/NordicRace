  $(document).ready(function(){
    //display number on sign
    i = 0;
    var player = $("#player");
    $(".up").click(function(){
      if (player.attr("src") == "images/armNed.svg") {
      $(".score").text(i += 1);
      $("#player").attr('src',"images/armOp.svg");
    }});
$(".down").click(function(){
    $("#player").attr('src',"images/armNed.svg");
})
  });


  $("#button-del").click(function(){
  $(".popup").addClass("hide");
  });
