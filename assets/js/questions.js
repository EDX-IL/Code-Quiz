//script for asking questions

let questionArea = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
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
  //console.log(getFuncName());

  //unhide questions
  unhideQuestionArea();

  //Render the current question
  renderQuestion();
  checkAnswer();
}

//let choices = document.querySelector("#choices");

function renderQuestion() {
  console.log(getFuncName());

  //display the question
  questionTitle.textContent = questions[currentQuestion].question;

  //create the buttons for each answer
  for (
    let index = 0;
    index < questions[currentQuestion].answers.length;
    index++
  ) {
    // console.log("number of answers:" + questions[currentQuestion].answers.length);

    let answerEl = document.createElement("p");
    let answerButton = document.createElement("button");
     // let answerId = document.createElement("ID="+index);
    //x answerEl.textContent = questions[currentQuestion].answers[index];
    questionArea.appendChild(answerEl);
    questionArea.appendChild(answerButton);
   // questionArea.append(answerId);

    answerButton.textContent = questions[currentQuestion].answers[index];
  }

  //check which button the use clicks



}

function checkAnswer() {
  console.log(getFuncName());
}

function unhideQuestionArea() {
  //console.log(getFuncName());
  //remove the hide class so the questions div shows
  questionArea.classList.remove("hide");
}

function fncHideQuestions() {
  console.log(getFuncName());
  //add class="hide so the questions div hides
  questionArea.classList.add("hide");
}
