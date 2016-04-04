$(document).ready(function() {


  var PlayerTwo = "X";
  var PlayerOne = "O";
  var Tie;
  var winner = "Default"
  var $gameCells = $('.cell');
  var moves = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8"];
  var count = 0;

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

  $(".cell").click(function() {
    if ((winner !== PlayerTwo) && $("#0").text() === PlayerOne && $("#1").text() === PlayerOne && $("#2").text() === PlayerOne ||
      $("#3").text() === PlayerOne && $("#4").text() === PlayerOne && $("#5").text() === PlayerOne ||
      $("#6").text() === PlayerOne && $("#7").text() === PlayerOne && $("#8").text() === PlayerOne ||
      $("#0").text() === PlayerOne && $("#3").text() === PlayerOne && $("#6").text() === PlayerOne ||
      $("#1").text() === PlayerOne && $("#4").text() === PlayerOne && $("#7").text() === PlayerOne ||
      $("#2").text() === PlayerOne && $("#5").text() === PlayerOne && $("#8").text() === PlayerOne ||
      $("#0").text() === PlayerOne && $("#4").text() === PlayerOne && $("#8").text() === PlayerOne ||
      $("#2").text() === PlayerOne && $("#4").text() === PlayerOne && $("#6").text() === PlayerOne) {
      winner = "PlayerOne";
      alert("Congratulations, Player 1 wins!");
    } else if ((winner !== PlayerOne) && $("#0").text() === PlayerTwo && $("#1").text() === PlayerTwo && $("#2").text() === PlayerTwo ||
      $("#3").text() === PlayerTwo && $("#4").text() === PlayerTwo && $("#5").text() === PlayerTwo ||
      $("#6").text() === PlayerTwo && $("#7").text() === PlayerTwo && $("#8").text() === PlayerTwo ||
      $("#0").text() === PlayerTwo && $("#3").text() === PlayerTwo && $("#6").text() === PlayerTwo ||
      $("#1").text() === PlayerTwo && $("#4").text() === PlayerTwo && $("#7").text() === PlayerTwo ||
      $("#2").text() === PlayerTwo && $("#5").text() === PlayerTwo && $("#8").text() === PlayerTwo ||
      $("#0").text() === PlayerTwo && $("#4").text() === PlayerTwo && $("#8").text() === PlayerTwo ||
      $("#2").text() === PlayerTwo && $("#4").text() === PlayerTwo && $("#6").text() === PlayerTwo) {
      winner = "PlayerOne";
      alert("Congratulations, Player 2 wins!");
    } else if (count === 9 && winner !== "PlayerOne" && winner !== "PlayerTwo") {
      winner = "Tie";
      alert("It's a Tie");
    };

    $("#winner").click(function() {
      count = 0;
      $(".cell").empty();
    });

  });
});
