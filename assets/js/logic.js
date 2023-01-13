//start button is clicked. Start Quiz
let startButtonEl = document.querySelector("#start");

//TODO look at ins 3-3 for function event rather than calling a function HERE
startButtonEl.addEventListener("click", fncDoQuiz);

let timeEl = document.querySelector("#time");

//This is the number of seconds for the quiz

//Main function to Do Quiz - called when start button clicked
function fncDoQuiz() {
  let quizTimeLeft = 5;
  console.log(getFuncName());

  //display the initial time
  timeEl.textContent = quizTimeLeft;
  console.log(quizTimeLeft);

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
      //End of Game
      fncEndGame();
    }

    console.log("after " + quizTimeLeft);
  }, 1000);

  //need to stop this happening until quiz is complete
}

function fncEndGame() {
  console.log(getFuncName());

  //display player score (function in scores.js)
  fncDisplayPlayerScore();

  //get player's initials  (function in scores.js)
  fncGetPlayerInitials();

  //save high scores  (function in scores.js)
  fncSaveHighScore();
}
