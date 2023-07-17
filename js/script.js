'use strict';

var guessNumber = Math.floor(Math.random() * 20) + 1;
console.log(guessNumber); // pour tester

// njib DOM elements
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const againButton = document.querySelector(".again");
const scoreNum = document.querySelector(".score");
const highscoreNum = document.querySelector(".highscore");
var score = 20;
var highscore = 0;



// Function pour afficher new score
function updateScore() {
  scoreNum.textContent = score;
}
// Function pour afficher new highscore
function updateHighscore() {
  highscoreNum.textContent = highscore;
}



// Check button clicked
checkButton.addEventListener('click', () => {
  var input = parseInt(guessInput.value);

  if (input < guessNumber) {
    message.innerHTML = "Number is low";
    document.querySelector("body").style.backgroundColor = "red";
    score -= 2;
    updateScore();
  } else if (input > guessNumber) {
    message.innerHTML = "Number is high";
    document.querySelector("body").style.backgroundColor = "blue";
    score -= 2;
    updateScore();
  } else {
    message.innerHTML = "Number is equal";
    document.querySelector("body").style.backgroundColor = "green";
    updateScore();
    if (score > highscore) {
      highscore = score;
      updateHighscore();
    }
  }
});

// Again button clicked
againButton.addEventListener('click', () => {
  guessNumber = Math.floor(Math.random() * 20) + 1;
  console.log(guessNumber); // pour tester
  message.innerHTML = "Start guessing...";
  guessInput.value = "";
  document.querySelector("body").style.backgroundColor = "black";
  score = 20;
  updateScore();
});

// final update
updateScore();
updateHighscore();
