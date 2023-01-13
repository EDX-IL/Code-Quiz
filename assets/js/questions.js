//script for asking questions

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
  //blnQuestionRendered = False;
  console.log(getFuncName());
  // renderQuestion();
  checkAnswer();
}

let questionArea = document.querySelector("#question-box");

function renderQuestion() {
  console.log(getFuncName());
  let questionEl = document.createElement("p");
  questionEl.textContent = questions[currentQuestion].question;
  questionArea.appendChild(questionEl);

  //create the buttons for each answer
  for (
    let index = 0;
    index < questions[currentQuestion].answers.length;
    index++
  ) {
    let answerButton = document.createElement("button");
    answerButton.textContent = questions[currentQuestion].answers[index];
  }
}

function checkAnswer(){
    console.log(getFuncName());


}