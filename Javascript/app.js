$(document).ready(function() {


  var $gameCells = $('.cell');
  var moves = ["", "", "", "", "", "", "", "", ""];
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



}


});
