// decent game logic 

// basic version game start?


// within html - a '<section class='game'> which holds all the game elements

// create a function to hold ALL the element queries for GAME

// function game() {
//     // create the queries
//     let game = document.querySelector('section.game');
//     // access children only when called
//     let timer = game.querySelector('section.game span.timer')
//     let start = game.querySelector('section.game start')
//     let score = game.querySelector('section.game span.score')
//     let highScore = game.querySelector('section.game ol.highscores')


//     // all other function go INSIDE the gameloop - ideally!?

//     // updateScore()

//     // highScores()


//     // the start button
//     // when game function called - change score to 0 and start timer function
//     // reset score and restart the quiz from a new random question 
//     this.Start = function () {
//         // reset score to 0
//         score.innerHTML = '0';
//         // reset timer here?
//         // remaining = 0; // etc 
//          // timer function INSIDE Start: 
//          function countdown() {
//             // timer logic here 
//             remaining = 0;
//          }

//     };

// }


// globals 

const totalQuestions = 10;
let currentQuestion = 1;
let questionNumber = 0;
let correct = true;
let wrong = false;
let correctCounter = 0;
let wrongCounter = 0;
let score = 0; // will be using to add to scoreboard/logic score
let next = false; // switch to check if next question called (true)
let index = 0; // we must track the q's via a global index! SOLVED


// functions 

// shuffle must come first - wheres the hoist??
// shuffle feature 
// create empty array
let shuffledArray = [];

function startShuffle() {
    // iterate over empty array
    for (let i = 0; i < quizQuestions.length; i++) {
        // if array is <= 9
        if (shuffledArray.length < 10) {
            // generate random * quizQuestions length
            let r = quizQuestions[Math.floor(Math.random()
                * quizQuestions.length)]
            // add a new random question each pass  (r)
            // if the array does not yet include r ??
            shuffledArray.push(r);
        }
    }
}

console.log(shuffledArray)

// onClick startbtn 
startQuiz()

function startQuiz(index) {

    console.log('quiz started!')
    // reset all counters, score 
    currentQuestion = 1;
    questionNumber = 1;
    correctCounter = 0;
    wrongCounter = 0;
    score = 0;
    next = false;
    index = 0;

    console.log('variables reset')

    // send saved leaderboard to localStorage (only if empty!)
    // this should be a function call to updateLocalStorage func 

    // generate a random question here!
    startShuffle()// this isnt working 
    let current = shuffledArray[index] // pick a random question via the shuffle 
    // let current = quizQuestions[index] // pick a random question via the shuffle 
    // generate the elements 
    // set question number 
    document.getElementById('question-number').innerHTML = 'Question: ' + questionNumber;
    // the question field
    document.querySelector('.question-label').innerHTML = current.question;
    // document.querySelector('.question-box').innerHTML = quizQuestions[0].question
    // 4 multiple choice box answers
    // as variables 
    let optionA = document.querySelector('#optionA')
    let optionB = document.querySelector('#optionB')
    let optionC = document.querySelector('#optionC')
    let optionD = document.querySelector('#optionD')
    optionA.innerHTML = current.optionA;
    optionB.innerHTML = current.optionB;
    optionC.innerHTML = current.optionC;
    optionD.innerHTML = current.optionD;

    console.log('elements generated!')
    console.log('user must select an answer now (via 1-4 answerButtons')

    questionNumber++;
    index++;
}

// a function that event listens for a button pressed, and returns 
// whether the button has the correct value that corresponds to the question
// IF it does, increment score by 1
// else -10 from remaining 
// re-set the score text? 

// check for correct answer 

function checkAnswer() {

    // get current question
    let currentQuestion = shuffledArray[index];
    // get currents answer 
    let currentAnswer = currentQuestion.answer;


    // all the elements with 'option'
    // find the button with the correct answer 
    let options = document.getElementsByName("option");

    let correctOption = null;


}

// event listener for buttons 

let questionsArea = document.querySelector('.questions-area')

questionsArea.addEventListener("click", function(event) {
    if(event.target.matches(".option")) {
        console.log(event.target)
    }
})
