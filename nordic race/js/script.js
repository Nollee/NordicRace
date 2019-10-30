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

$(document).ready(function(){
  $("#button-del").click(function(){
  $(".popup").addClass("hide");
    countdown();
  });
  });

  // https://duckdev.com/blog/count-down-redirect-using-javascript/
  var seconds = 20;

  function countdown() {
      seconds = seconds - 1;
      if (seconds < 0) {
        if (i<40) {
          $(".loser").addClass("show");
          $(".result").text(i);
        }
        else if ( (i>=40) == (i<70) ) {
          $(".middle").addClass("show");
          $(".result").text(i);

        }
        else if (i>=70) {
          $(".winner").addClass("show");
          $(".result").text(i);

        }
      } else {
          // Update remaining seconds
          document.getElementById("countdown").innerHTML = seconds;
          // Count down using javascript
          window.setTimeout("countdown()", 1000);
      }
  }


  // Mapbox.org
  mapboxgl.accessToken = 'pk.eyJ1Ijoibm9sbGVlIiwiYSI6ImNrMjAyOW9lZTExM3kzbnF0YjdwczFndnkifQ.vHQ65I_wLPui_mer4z_Rhg';

var oberst1 = [12.628,55.694];
var oberst2 = [12.6188,55.6977];
var oberst3 = [12.612,55.6947];
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/nollee/ck2bulyzc0om51co7kbid6sij',
center: [12.619,55.694],
zoom: 13.65
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 25 })
.setText('Armbøjninger');

var popup2 = new mapboxgl.Popup({ offset: 25 })
.setText('Hop');

var popup3 = new mapboxgl.Popup({ offset: 25 })
.setText('Svømning');

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

var el2 = document.createElement('div');
el2.id = 'marker2';

var el3 = document.createElement('div');
el3.id = 'marker3';
// create the marker
new mapboxgl.Marker(el)
.setLngLat(oberst1)
.setPopup(popup) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el2)
.setLngLat(oberst2)
.setPopup(popup2) // sets a popup on this marker
.addTo(map);

new mapboxgl.Marker(el3)
.setLngLat(oberst3)
.setPopup(popup3) // sets a popup on this marker
.addTo(map);
