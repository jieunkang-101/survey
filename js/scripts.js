$(document).ready(function() {
  $("form").submit(function(event) {
    
    var name = $("#name").val();
    var dob = $("#born").val();
    var favoriteFood = $("#food").val();
    var favoriteColor = $("#color").val();
    
    $(".hidden").removeClass("hidden");
    $(".well").css("background-color", favoriteColor);
    event.preventDefault();
  });
});
