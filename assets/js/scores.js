//Display HighScores on page load

let finalScoreEl = document.querySelector("#final-score");
let endScreenEl = document.querySelector("#end-screen");
let endScreenInitialsEl = document.querySelector("#initials");
let endScreenButtonEl = document.querySelector("#submit");

let HighScoresStore = [{ initials: "ACE", score: "100", }];

//players final score
let playerFinalScore = 0;

//players initials
let playersInitials = "";

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
  //add listener for submit via enter button to get final score and save hightscore
  endScreenInitialsEl.addEventListener("keyup", function(event) {
    if (event.key === 13) { fncSaveHighScore}});

  //add listener for the submit button to get final score and save highscore
  endScreenButtonEl.addEventListener("click", fncSaveHighScore);

}

function fncSaveHighScore() {
  console.log(getFuncName());
``//get the initials from initials text box
  playersInitials = endScreenInitialsEl.value;
  console.log(playersInitials);

  //save high score to local  storage


  
}
