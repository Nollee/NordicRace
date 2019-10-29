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
    countdown();
  });


  // https://duckdev.com/blog/count-down-redirect-using-javascript/
  var seconds = 20;

  function countdown() {
      seconds = seconds - 1;
      if (seconds < 0) {
          // Chnage your redirection link here
          window.location = "index.html";
      } else {
          // Update remaining seconds
          document.getElementById("countdown").innerHTML = seconds;
          // Count down using javascript
          window.setTimeout("countdown()", 1000);
      }
  }

  // Run countdown function
