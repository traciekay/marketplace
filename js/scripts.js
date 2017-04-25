$(document).ready(function() {
    $("#marketplace form").submit(function(event) {
      var blanks = ["name", "email", "address", "exclamation", "purchase"];

      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
      });

      $("#receipt").show();

      event.preventDefault();
    });
  });
