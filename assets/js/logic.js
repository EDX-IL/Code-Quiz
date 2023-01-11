//start button is clicked. Start Quiz
let startButtonEl = document.querySelector("#start");
startButtonEl.addEventListener("click", fncDoQuiz);

let timeEl = document.querySelector("#time");

//This is the number of seconds for the quiz
let quizTimeLeft = 60;

//Main function to Do Quiz
function fncDoQuiz() 
{
    console.log ("fncDoQuiz");
    //display the initial time
    timeEl.textContent = quizTimeLeft;
    console.log(quizTimeLeft);

    let timeInterval = setInterval(function () {

        //ask questions


        //if correct answer then add 1 point to score
        //else deduct time from clock   

        quizTimeLeft--;
        timeEl.textContent = quizTimeLeft;


    },1000);



    // do the quiz until time is zero or no questions left
    // do {
        
    //     console.log ("Do while loop in fncDoQuiz");
    //     fncAskQuestions;
       
    // }while (quizTimeLeft > 0);

    console.log("End of Quiz");
    //Display Player Score
    fncDisplayPlayerScore();

    //get players Initials
    fncGetPlayerInitials ();

    //save players initials and score
    fncSaveHighScore();

}




function fncAskQuestions() {
    console.log("fncAskQuestions");

}

//function to display Player Score
function fncDisplayPlayerScore() {

    console.log("fncDisplayPlayerScore");

}

function fncGetPlayerInitials(){
    console.log ("fncGetPlayerInitials");
}

function fncSaveHighScore() {
    console.log ("fncSaveHighScore");   
}