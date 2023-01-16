//start button is clicked. Start Quiz
let startButtonEl = document.querySelector("#start");
let startEl = document.querySelector(".start");
let blnTimesUp = false;
let quizTimeLeft = 60;

//let endScreenEl = document.querySelector("#end-screen");

//TODO look at ins 3-3 for function event rather than calling a function HERE
startButtonEl.addEventListener("click", fncDoQuiz);

let timeEl = document.querySelector("#time");

//This is the number of seconds for the quiz

//Main function to Do Quiz - called when start button clicked
function fncDoQuiz() {
 // console.log(getFuncName());

  //hide "#start-screen"
  fncHideStartScreen();

  //display the initial time
  timeEl.textContent = quizTimeLeft;
  // console.log(quizTimeLeft);

  //Ask Questions (function in questions.js)
  fncAskQuestions();

  let timeInterval = setInterval(function () {
    //if correct answer do nothing
    //else deduct time from clock

    quizTimeLeft--;
    timeEl.textContent = quizTimeLeft;

    if (quizTimeLeft < 0) {
      // end of quiz
      clearInterval(timeInterval);
      timeEl.textContent = "Time's Up!  ";
      blnTimesUp = true;
      //End of Game
      fncEndGame();
    }

   // console.log("after " + quizTimeLeft);
  }, 1000);

  //need to stop this happening until quiz is complete
}

function fncEndGame() {
 // console.log(getFuncName());

  //HideQuestions div
  fncHideQuestions();

  //Unhide End-Screen div
  fncUnhideEndScreen();

  //display player score (function in scores.js)
  fncDisplayPlayerScore();

  //get player's initials and save highscores (function in scores.js)
  fncGetPlayerInitials();

}

function fncHideStartScreen() {
 // console.log(getFuncName());
  startEl.setAttribute("class", "hide");
}

function fncUnhideEndScreen() {
 // console.log(getFuncName());
  //remove the hide class so the end-screen div shows
  endScreenEl.classList.remove("hide");
}

