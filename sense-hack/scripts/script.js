// Set starting life totals here
var playerLife = 5;
var hackerLife = 5;

// Message when the game is over
var hackerWinnerMessage = "Game over: You got hacked!";
var playerWinnerMessage = "You defeated the hacker!";

// Game code starts here
var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

var roundFinished = false;
var cardSelected = false;

updateScores();

document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

// Adds click handler to all player card elements
for(var i = 0; i < allCardElements.length; i++) {
  var card = allCardElements[i];
  if(card.classList.contains("player-card")) {
    card.addEventListener("click",function(e){
      cardClicked(this);
    });
  }
}

