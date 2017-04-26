$(document).ready(function() {
    $("#marketplace form").submit(function(event) {
      var name= $("#name").val();
      var gender = $("#gender").val();
      var email= $("#email").val();
      var address= $("#address").val();

      var dop = $("#purchase").val();

      $(".name").text(name);
      $(".gender").text(gender);
      $(".email").text(email);
      $(".address").text(address);
      $(".purchase").text(dop);




      $("#receipt").show();

      event.preventDefault();
    });
  });
