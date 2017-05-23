
$(document).ready(function() {

      //...Game Objective
      var targetNumber = 50;
      // When random-button is clicked...
      $("#Lester").on("click", function() {

        // ... we generate a random number
        var random = Math.floor(Math.random() * 120) + 1;

        // ... and then dump the random number into our random-number div.
        $("#score").html(random)

          if (random > targetNumber)
            alert("you lose");
          }

       

});

