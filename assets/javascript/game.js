$(document).ready(function() { 

    var win = 0;
    var loss = 0;
    var totalScore = 0; 
    

    function newGame() {
        $('#win').html("Wins: " + win);
        $('#loss').html("Losses: " + loss);
        $('#totalScore').html(totalScore);
    }

        //pick random number
        var number = (Math.floor(Math.random() * 101) + 19);
        $('#guessNumber').text(number);

        //reset for new random number
        function newNumber() {
           number = Math.floor(Math.random() * 101) + 19;
           $('#guessNumber').text("Target: " + number);
           console.log(number);
        }

        //new values for crystals
        function crystalReset() {
        $('.crystal').each(function (index) {
            $(this).attr("data-crystalValue", Math.floor(Math.random() * 12) +1);
          });
       }   

       newGame();
       newNumber();
       crystalReset();

    // when .crystal is clicked, add random value to total score.
    $('.crystal').on('click', function() {
        var crystalValue = ($(this).attr("data-crystalValue"));
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        $('#totalScore').text(totalScore)
        console.log(crystalValue);

        //win conditions
        if (totalScore === number) {
            alert("WINNER!");
            totalScore = 0;
            win++;
            newGame();
            crystalReset();
            newNumber();

        }
        //lose conditions, both conditions reset game when met.
        else if (totalScore > number) {
            alert("Sorry, you lose! Try again!");
            totalScore = 0;
            loss++;
            newGame();
            crystalReset();
            newNumber();
        }
    
    })
    

});