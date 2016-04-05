$(document).ready(function() {


  var PlayerTwo = "X";
  var PlayerOne = "O";
  var Tie;
  var winner = "Default"
  var $gameCells = $('.cell');
  var moves = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8"];
  var count = 0;
  var score1 = 0;
  var score2 = 0;


  //function adds an X  for player 1 and an O for player 2 for the cell that is clicked
  function startGame() {
    $($gameCells).on('click', function() {
      moves[this.id] = this.id;
      count++;
      if (count % 2 == 0) {
        moves[this.id] = "X";
        $(this).text("X");
      } else {
        moves[this.id] = "O";
        $(this).text("O");
      }
      console.log(moves, count);
    });
    //calls the getWinner function
    getWinner();
  }
  //calls the startGame function
  startGame();
  //function gets the winner depending on which cells have X or O and then alerts who the winner is
  function getWinner() {
    $($gameCells).on('click', function() {
      //conditions for Player 1 winning
      if ((winner !== PlayerTwo) && $("#0").text() === PlayerOne && $("#1").text() === PlayerOne && $("#2").text() === PlayerOne ||
        $("#3").text() === PlayerOne && $("#4").text() === PlayerOne && $("#5").text() === PlayerOne ||
        $("#6").text() === PlayerOne && $("#7").text() === PlayerOne && $("#8").text() === PlayerOne ||
        $("#0").text() === PlayerOne && $("#3").text() === PlayerOne && $("#6").text() === PlayerOne ||
        $("#1").text() === PlayerOne && $("#4").text() === PlayerOne && $("#7").text() === PlayerOne ||
        $("#2").text() === PlayerOne && $("#5").text() === PlayerOne && $("#8").text() === PlayerOne ||
        $("#0").text() === PlayerOne && $("#4").text() === PlayerOne && $("#8").text() === PlayerOne ||
        $("#2").text() === PlayerOne && $("#4").text() === PlayerOne && $("#6").text() === PlayerOne) {
        winner = "PlayerOne";
        score1++;
        document.getElementById("winner").innerHTML = "<h1>Congratulations, Player 1 wins!</h1";
        document.getElementById("score1").innerHTML = "<div>Player 1 has won " + score1 + " game(s)!</div>";
        $($gameCells).off('click');
        //conditions for player 2 winning
      } else if ((winner !== PlayerOne) && $("#0").text() === PlayerTwo && $("#1").text() === PlayerTwo && $("#2").text() === PlayerTwo ||
        $("#3").text() === PlayerTwo && $("#4").text() === PlayerTwo && $("#5").text() === PlayerTwo ||
        $("#6").text() === PlayerTwo && $("#7").text() === PlayerTwo && $("#8").text() === PlayerTwo ||
        $("#0").text() === PlayerTwo && $("#3").text() === PlayerTwo && $("#6").text() === PlayerTwo ||
        $("#1").text() === PlayerTwo && $("#4").text() === PlayerTwo && $("#7").text() === PlayerTwo ||
        $("#2").text() === PlayerTwo && $("#5").text() === PlayerTwo && $("#8").text() === PlayerTwo ||
        $("#0").text() === PlayerTwo && $("#4").text() === PlayerTwo && $("#8").text() === PlayerTwo ||
        $("#2").text() === PlayerTwo && $("#4").text() === PlayerTwo && $("#6").text() === PlayerTwo) {
        winner = "PlayerTwo";
        score2++
        document.getElementById("winner").innerHTML = "<h1>Congratulations, Player 2 wins!</h1>";
        document.getElementById("score2").innerHTML = "<div>Player 2 has won " + score2 + " game(s)!</div>";
        $($gameCells).off('click');
        //condition if there is no winner and the game is a tie
      } else if (count === 9 && winner !== "PlayerOne" && winner !== "PlayerTwo") {
        winner = "Tie";
        document.getElementById("winner").innerHTML = "<h1>It's a tie! Better luck next time.</h1>";
        $($gameCells).off('click');
      };
    });
  }

  //when New Game button is clicked the game is reset
  $("#button").on('click', function() {
    count = 0;
    winner = "Default";
    document.getElementById("winner").innerHTML = " ";
    $($gameCells).empty();
    startGame();
  });
});
