//start button is clicked. Start Quiz
let startButtonEl = document.querySelector("#start");

//TODO look at ins 3-3 for function event rather than calling a function HERE
startButtonEl.addEventListener("click", fncDoQuiz);

let timeEl = document.querySelector("#time");

//This is the number of seconds for the quiz


//Main function to Do Quiz - called when start button clicked
function fncDoQuiz() 
{
    let quizTimeLeft = 5;
    console.log ("fncDoQuiz");
    //display the initial time
    timeEl.textContent = quizTimeLeft;
    console.log(quizTimeLeft);

    let timeInterval = setInterval(function () {

      

        //if correct answer then add 1 point to score
        //else deduct time from clock   

        quizTimeLeft--;
        timeEl.textContent = quizTimeLeft;


        if (quizTimeLeft <  0)
        {
            // end of quiz
            clearInterval(timeInterval);
            timeEl.textContent = "Time's Up!  ";

            //display player score
            fncDisplayPlayerScore();


            //get player's initials
            fncGetPlayerInitials();

            //save highscores
            fncSaveHighScore();

        }

         //do the quiz until time is zero or no questions left
                    //ask questions
         console.log("ask questions");


        console.log("after" + quizTimeLeft);

    },1000);


    //need to stop this happening until quiz is complete

   


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