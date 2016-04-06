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
  var audio = new Audio('5_Sec_Crowd_Cheer-Mike_Koenig-1562033255.mp3');



  //function adds an X  for player 1 and an O for player 2 for the cell that is clicked
  function startGame() {
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
        audio.play();
        document.getElementById("winner").innerHTML = "<h1>Congratulations, O's win!</h1";
        document.getElementById("score1").innerHTML = "<div> has won " + score1 + " game(s)!</div>";
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
        audio.play();
        document.getElementById("winner").innerHTML = "<h1>Congratulations, X's win!</h1>";
        document.getElementById("score2").innerHTML = "<div> has won " + score2 + " game(s)!</div>";
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

  //clear score button function
  $("#clearScore").on('click', function() {
    document.getElementById("score1").innerHTML = " ";
    document.getElementById("score2").innerHTML = " ";
    score1 = 0;
    score2 = 0;
  });

  //player 1 type name function
  $("#name1").keyup(updateName);
    function updateName() {
    var name = $("#name1").val();
    $("#input1").text(name);
    console.log("keyup! " + name);
  }
  //player 2 type name function
  $("#name2").keyup(updateNameTwo);
    function updateNameTwo() {
    var name = $("#name2").val();
    $("#input2").text(name);
    console.log("keyup! " + name);
  }
});


