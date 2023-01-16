//Display HighScores on page load

let finalScoreEl = document.querySelector("#final-score");
let endScreenEl = document.querySelector("#end-screen");
let endScreenInitialsEl = document.querySelector("#initials");
let endScreenButtonEl = document.querySelector("#submit");
let highScoresOl = document.querySelector("#highscores");

//let highScoresStore = [{ initials: "ACE", score: "100", }];
let highScoresStore = [];
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
  //console.log(getFuncName());
  localStorage.clear();
  //render highscores
  fncRenderHighScoresPage();
}

//function to display Player Final Score
function fncDisplayPlayerScore() {
  //  console.log(getFuncName());
  finalScoreEl.textContent = playerFinalScore;
}

function fncGetPlayerInitials() {
  // console.log(getFuncName());
  //add listener for submit via enter button to get final score and save hightscore
  endScreenInitialsEl.addEventListener("keyup", function (event) {
    if (event.key === 13) {
      fncSaveHighScore;
    }
  });

  //add listener for the submit button to get final score and save highscore
  endScreenButtonEl.addEventListener("click", fncSaveHighScore);
}

function fncSaveHighScore() {
  // console.log(getFuncName());
  ``; //get the initials from initials text box
  playersInitials = endScreenInitialsEl.value;

  // players initials blank do ask user to enter 3 initials
  if (playersInitials == "") {
    //Player hasn't entered initials
    alert("Please enter your initials");
    fncGetPlayerInitials;
  }

  // store highscore in local storage
  //PI = PlayerInitials
  //PFS = PlayerFinalScores
  //HSS = High Score Storage
  const strHighScore = { PI: playersInitials, PFS: playerFinalScore };
  localStorage.setItem("HSS", JSON.stringify(strHighScore));

  //display highscores page with highscores from localstorage
  fncRenderHighScoresPage();
}

function fncRenderHighScoresPage() {
  //console.log(getFuncName());

  //open highscores page
  window.location.href = "highscores.html";
 // highScoresOl.textContent = "200";

  //console.log("localStorage:" + localStorage.length);
  //for each item in local score display the scores
  for (let index = 0; index < localStorage.length; index++) {
    let createHighScoreEl = document.createElement("ul");
    highScoresOl.appendChild(createHighScoreEl);
 //  console.log (window.localStorage.getItem('HSS'));
   let displayPI = JSON.parse(window.localStorage.getItem('PI'));
   let displayPFS = JSON.parse(window.localStorage.getItem("PFS"));
 //   highScoresOl.textContent = "100";
  highScoresOl.textContent(displayPI + " - " + displayPFS);
  }
}
