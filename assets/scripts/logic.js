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
let next = false; // switch to check if next question called (true)
let index = 0; // we must track the q's via a global index! SOLVED
let chosen;

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
            if (!shuffledArray.includes(r)) {
                // push a new question to array
                shuffledArray.push(r);
            }
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
    console.log(current.question)
    // document.querySelector('.question-box').innerHTML = quizQuestions[0].question

    // grab the correct answer?
    // let answer = 
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
    console.log('user must select an answer now (via 1-4 answerButtons)')


    // if user presses a button, try to get it to say if theyre wrong or right?
    // event listener for buttons - should this be inside here?

    let questionsArea = document.querySelector('.questions-area')

    questionsArea.addEventListener("click", function (event) {
        if (event.target.matches(".option")) {
            console.log(event.target)
            // are we accessing the buttons id??
            console.log(event.target.id)
            // set selected button to a new var?
            let chosen = event.target.id;
            console.log('chosen:', chosen)

            let currentAnswer = current.answer;
            // this is undefined - we are not accessing it correctly
            console.log('current questions correct answer:', currentAnswer)

            if (chosen === currentAnswer) {
                console.log('correct')
                // call the 'pointUp function that will add a point, and call qualify if timer === 0
                pointUp()
            } else {
                console.log('wrong')
                // wrong - decrease remaining by 10
                remaining = remaining - 10;
            }

            questionNumber++;
            console.log('questionnumber++', questionNumber)
            index++;
            console.log('index++', index)

            // call nextQuestion
            // nextQuestion() // cannot seem to generate the next question here 
        }
    })

    // // call nextQuestion
    // nextQuestion()
}

// why is this erroring out at line 151?  It is exactly what we have above in startQuiz?
// display next question in DOM
function nextQuestion(index) {
    // next question?
    // startQuiz()
    // call the shuffle
    startShuffle();
    // get current by index 
    let current = shuffledArray[index]
    // rebuild the html elements 
    // current Q number
    let optionA = document.querySelector('#optionA')
    let optionB = document.querySelector('#optionB')
    let optionC = document.querySelector('#optionC')
    let optionD = document.querySelector('#optionD')
    optionA.innerHTML = current.optionA;
    optionB.innerHTML = current.optionB;
    optionC.innerHTML = current.optionC;
    optionD.innerHTML = current.optionD;
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

    if (chosen === currentAnswer) {
        console.log('correct')
    } else {
        console.log('wrong')
    }


}

// // event listener for buttons 

// let questionsArea = document.querySelector('.questions-area')

// questionsArea.addEventListener("click", function(event) {
//     if(event.target.matches(".option")) {
//         console.log(event.target)
//     }
// })


// test function that adds a point to user NEW's .score (each press)

// function pointUp() {
//     // when btn clicked 
//     console.log('point up!')
//     // add a point to score - but award 100 points per answer
//     score += 100
//     // also add to newPlayer score ? why need both if they're assigned to each other above?
//     newPlayer.score += 100;
//     console.log('score & newPlayer.score:', score, newPlayer.score)
//     // update element 
//     document.querySelector('#score-label').innerHTML = 'Score: ' + score;

//     // when player can enter initials
//     // if score is > than highScores[i] - in a for loop that iterates through the array?
//     // or a set score for now

//     // ISSUE: if I say score > pos5.score then qualify is called, 
//     //however if I say anything to do with remaining <= 0 - it fails?
//     if (score >= pos5.score) { // this is called as soon as a question is answered- 
//         // we want once the quiz has finished
//     // if (remaining <= 0 && score >= pos5.score) {
//     // if (remaining <= 0) {

//         // call the qualify function
//         qualify()

//         // confused here! ...

//         // a findIndex of the lowest score 
//         const index = scoreboard.findIndex(object => {
//             // debug
//             console.log('log all objects:', object, object.score)
//             // return element we need (id:1)
//             return object.score === 1;
//         });

//         if (index !== -1) {
//             // assign entered name as the players name (n1)
//             scoreboard[index].name = playerInput;
//             // add score to score (s1)
//             scoreboard[index].score = score;
//             // debug
//             console.log('new indexes name:', scoreboard[index].name)
//             console.log('new scoreboard:', scoreboard)

//             // update the element to add name to scoreboard 
//             // document.querySelector('.score-table .n1').innerHTML = playerInput;
//             // document.querySelector('.score-table .s1').innerHTML = score;
//         }
//     }
// }