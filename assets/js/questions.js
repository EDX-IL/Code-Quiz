//script for asking questions

let questionArea = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesArea = document.querySelector("#choices");
// let questionHide = document.querySelector("#questions .hide");
//console .log("questionArea:"+questionArea);
//console.log("questionHide:"+questionHide);

const questions = [
  {
    question: "Q1. Click on the largest number?",
    answers: ["10", "500", "25", "100"],
    correctAnswer: 1,
  },

  {
    question: "Q2. Click on the smallest number?",
    answers: ["25", "105", "999", "5"],
    correctAnswer: 3,
  },

  {
    question: "Q3. Click on the letter?",
    answers: ["a", "105", "999", "5"],
    correctAnswer: 0,
  },
];

let currentQuestion = 0;

function fncAskQuestions() {
 // console.log(getFuncName());
  //this stores whether the user has answered
  let blnQuestionAnswered = false;
  let blnAnswersDisplayed = false;

  //unhide questions area - hidden by default in index.html
  fncUnhideQuestionArea();

  
  //for loop for each question
 // do {
    //for (let index = 0; index < questions.length; index++) {
    //display the question
    questionTitle.textContent = questions[currentQuestion].question;

    //create the buttons for each answer using p and button elements
    if (blnAnswersDisplayed === false) {
      //display answers once

      for (
        let index = 0;
        index < questions[currentQuestion].answers.length;
        index++
      ) {
        let answerEl = document.createElement("p");
        let answerButton = document.createElement("button");
        choicesArea.appendChild(answerEl);
        choicesArea.appendChild(answerButton);

        answerButton.textContent = questions[currentQuestion].answers[index];
        answerButton.setAttribute("data-answerIndex", index);
      }
      //answers have been displayed
      blnAnswersDisplayed = true;
    }
    //wait for answer clickedByUser 
  //  do {
      

     questionArea.addEventListener("click", function (event) {
     event.preventDefault();

    let clickedByUser = event.target;
   // console.log("clickedByUser:" + clickedByUser);

    let clickedAnswer = clickedByUser.getAttribute("data-answerIndex");

    if (clickedByUser.matches("button")) {
      if (
        parseInt(clickedAnswer) === questions[currentQuestion].correctAnswer) {
        //correct answer
        fncCorrectAnswer();
        }
      else {
        //wrong answer
        fncWrongAnswer();
          }
         // currentQuestion++;

     }
     });
 //   } while (blnQuestionAnswered===false && !blnTimesUp);
//  } while (currentQuestion < questions.length );
}


//}

// function fncRenderAnswers() {
//   console.log(getFuncName());
// }

function fncUnhideQuestionArea() {
 // console.log(getFuncName());
  //remove the hide class so the questions div shows
  questionArea.classList.remove("hide");
}

function fncHideQuestions() {
//  console.log(getFuncName());
  //add class="hide so the questions div hides
  questionArea.classList.add("hide");
}


//called when user gets answer wrong
function fncWrongAnswer() {
//  console.log(getFuncName());
  //reduced timer by 10 seconds
  quizTimeLeft = quizTimeLeft-10
}


//called when user gets answer correct
function fncCorrectAnswer() {
  // console.log(getFuncName());
  playerFinalScore++;
}   

// //function to clear answer buttons
// function fncClearPotentialAnswers() {
//   console.log(getFuncName());

//   choicesArea.removeChild("p");

//   for (
//     let index = 0;
//     index < questions[currentQuestion].answers.length;
//     index++
//   ) {
//     let answerEl = document.createElement("p");
//     let answerButton = document.createElement("button");
//     choicesArea.removeChild(answerEl);
//     choicesArea.removeChild(answerButton);
//   }
// }
