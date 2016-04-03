$(document).ready(function() {


  var PlayerTwo = "X";
  var PlayerOne = "O";
  var winner;
  var $gameCells = $('.cell');
  var moves = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8"];
  //Array(9).join(".").split(".");
  var count = 0;

  $($gameCells).one('click', function() {
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
    })

  $(".cell").click( function() {
    $(moves[this.id]).text(PlayerOne);
     if ((winner !== PlayerTwo) && $("#0").text() === PlayerOne && $("#1").text() === PlayerOne && $("#2").text() === PlayerOne ||
      $("#3").text() === PlayerOne && $("#4").text() ===  PlayerOne && $("#5").text() ===   PlayerOne ||
      $("#6").text() === PlayerOne && $("#7").text() ===  PlayerOne && $("#8").text() ===   PlayerOne ||
      $("#0").text() === PlayerOne && $("#3").text() === PlayerOne && $("#6").text() === PlayerOne ||
      $("#1").text() === PlayerOne && $("#4").text() === PlayerOne && $("#7").text() === PlayerOne ||
      $("#2").text() === PlayerOne && $("#5").text() === PlayerOne && $("#8").text() === PlayerOne ||
      $("#0").text() === PlayerOne && $("#4").text() === PlayerOne && $("#8").text() === PlayerOne ||
      $("#2").text() === PlayerOne && $("#4").text() === PlayerOne && $("#6").text() === PlayerOne ) {
      winner = "PlayerOne";
      alert("Congratulations, Player 1 wins!");
    }
    if (count === 9 && winner !=="PlayerOne" && winner !== "PlayerTwo") {
      alert("It's a Tie");
    }
  });



});



