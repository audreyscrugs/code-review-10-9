$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var icecreamInput = $("input#icecream").val();
    var colorInput = $("input#color").val();
    var placeInput = $("input#place").val();
    var personInput = $("input#person").val();
    var foodInput = $("input#food").val();

    $(".icecream").text(icecreamInput);
    $(".color").text(colorInput);
    $(".place").text(placeInput);
    $(".person").text(personInput);
    $(".food").text(foodInput);
  

    $("#list").show();

    event.preventDefault();

  });
});
