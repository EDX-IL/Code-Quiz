//Display HighScores on page load

let finalScoreEl = document.querySelector("#final-score");
let endScreenEl = document.querySelector("#end-screen");

let HighScoresStore = [{ initials: "ACE", score: "100", }];

//players final score
let playerFinalScore = 0;

//If ClearHighScore Button Pressed ClearHighScores
//this should only run if on highscores.html page
let clearHighScoreEl = document.querySelector("#clear");
if (window.location.pathname == "/highscores.html") {
  clearHighScoreEl.addEventListener("click", fncClearHighScores);
}

//This function will clear the highscores
function fncClearHighScores() {
  console.log(getFuncName());
}

//function to display Player Final Score
function fncDisplayPlayerScore() {
  console.log(getFuncName());
  finalScoreEl.textContent = playerFinalScore;
}

function fncGetPlayerInitials() {
  console.log(getFuncName());
  //add listener for submit to get final score and save hightscore
  endScreenEl.addEventListener("submit", fncSaveHighScore);
}

function fncSaveHighScore() {
  console.log(getFuncName());
  //save high score to local  storage
}
