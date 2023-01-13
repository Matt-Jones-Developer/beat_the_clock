// pseudo quiz logic 
// How do we code a quiz?

// elements:
// a timer countdown
// a start quiz button
// a question box
// 4 answers buttons
// 'correct!' and 'wrong!' labels
// next ?
// restart button

// functions and datatypes

// 1. questions: array
// 2. globals: 
// question number 
// correct/wrong - booleans
// correctCounter, wrongCounter - int
// currentQuestion - int
// score - int 
// functions 
// 3. function: call a question / display it - startQuiz?
// 4. function: check if correct or wrong ?
// checkAnswer()
// if chosen === answer; true -> score++
// else !==; false -> timer--;
// call next_question
// scoreCounter - how did they do? feedback
// 5. reset/restart game function with button

// features:
// randomise function (Math.random)
// flashing timer < 5 seconds left
// sounds if right or wrong (chimes)
// sound: celebration/ end of quiz
// New Top Score sound 
// new game/start game sound 
// next question sound ?


// html elements 

// constant - already within html
// question box 
// 4 answer buttons 
// current quiz number?

// generated (createElement) - querySelector.innerHTML
// start button
// restart button 
// currentNumber 
// question label
// answer labels x4
// correct label
// wrong label 
// next button?



// questions array 
let quizQuestions = [

    {
        question: "What does JSON stand for ?",
        optionA: "Java Script Object Notation",
        optionB: "Javascript Standard Object Notation",
        optionC: "Javascript Sets Off Noobs",
        optionD: "Javascript Store Options Now",
        answer: "optionA"
    },

    {
        question: "How do you import a javascript file into your html ?",
        optionA: "link href= ...",
        optionB: "script url= ...",
        optionC: "script src= ...",
        optionD: "link url= ...",
        answer: "optionC"
    },

    {
        question: "Which one of these data types is NOT a primitive ?",
        optionA: "number",
        optionB: "object",
        optionC: "string",
        optionD: "undefined",
        answer: "optionB"
    },

    {
        question: "How would you write an array ?",
        optionA: "let someArray = [1,'2','three']",
        optionB: "const = array[1,2,3]",
        optionC: "let = someArray('1','2','3')",
        optionD: "let = someArray[1,2,3]",
        answer: "optionA"
    },

    {
        question: "Why would you use a function over a plain if-else ?",
        optionA: "Que?",
        optionB: "A function does something more",
        optionC: "A function can be called whenever you need it",
        optionD: "A function is immutable, thus protecting the if-else",
        answer: "optionC"
    },

    {
        question: "How do we write an if statement ?",
        optionA: "if {doThis} {else} doThat;",
        optionB: "if (someVar == someValue) { doThis; }",
        optionC: "if {(someVar != someValue) doThis; }",
        optionD: "if someVar === someValue; { doThis }",
        answer: "optionB"
    },

    {
        question: "If you were to use arrayName.length, how would you access the second item ?",
        optionA: "arrayName[1]",
        optionB: "arrayName[-1]",
        optionC: "arrayName[2]",
        optionD: "arrayName[0][2]",
        answer: "optionA"
    },

    {
        question: "If you wanted to store a variable that won't change what would you use ?",
        optionA: "concst",
        optionB: "let",
        optionC: "const",
        optionD: "var",
        answer: "optionC"
    },

    {
        question: "How would you print something in JavaScript ?",
        optionA: "console.log('print something')",
        optionB: "print.log 'this'",
        optionC: "log...this!!",
        optionD: "console.log[print me]",
        answer: "optionA"
    },

    {
        question: "If your code has a typo error, what is this called ?",
        optionA: "Logic error",
        optionB: "Bad eyesight",
        optionC: "SyntaxError",
        optionD: "The computer made me do it",
        answer: "optionC"
    },

    {
        question: "What is the purpose of a switch statement ?",
        optionA: "Saves time when switching between variables",
        optionB: "Makes functions reusable",
        optionC: "Switches variables on or off",
        optionD: "Quicker than multiple if else statements",
        answer: "optionD"
    },

    {
        question: "What's wrong with this line of code: const userGuess === Number(guessField.value); ?",
        optionA: "Incorrect assignment operator",
        optionB: "Dunno",
        optionC: "Missing {} brackets",
        optionD: "Should be let not a const",
        answer: "optionA"
    },

    {
        question: "What is a const variable ?",
        optionA: "A box of feather dusters",
        optionB: "A container that holds an immutable value",
        optionC: "A variable that changes form, like an amoeba",
        optionD: "A container with a mutable value",
        answer: "optionB"
    },

]

// accessing indexes:

console.log(quizQuestions[0]) // returns Q1
console.log(quizQuestions[0].question) // returns "what does JSON stand for..."

// globals 

const totalQuestions = 10;
let currentQuestion = 1;
let questionNumber = '1 to 10?';
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

// onClick startbtn -> call this
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

    // generate a random question here!
    startShuffle()// this isnt working 
    // let current = shuffledArray[index] // pick a random question via the shuffle 
    let current = quizQuestions[index] // pick a random question via the shuffle 
    // generate the elements 
    // the question field
    // document.querySelector('.question-box').innerHTML = current.question;
    document.querySelector('.question-box').innerHTML = quizQuestions[0].question
    // 4 multiple choice box answers
    document.querySelector('.optionA').innerHTML = current.optionA;
    document.querySelector('.optionB').innerHTML = current.optionB;
    document.querySelector('.optionC').innerHTML = current.optionC;
    document.querySelector('.optionD').innerHTML = current.optionD;

    console.log('elements generated!')
    console.log('user must select an answer now (via 1-4 answerButtons')
}



// shuffle feature 
// create empty array
// let shuffledArray = [];

// function startShuffle() {
//     // iterate over empty array
//     for (let i = 0; i < shuffledArray.length; i++) {
//         // if array is <= 9
//         if (shuffledArray.length <= 9) {
//             // generate random * quizQuestions length
//             let r = quizQuestions[Math.floor(Math.random()
//                 * quizQuestions.length)]
//             // add a new random question each pass  (r)
//             // if the array does not yet include r 
//             if (!shuffledArray.includes(r)) {
//                 // push a new question to array
//                 shuffledArray.push(r);
//             }
//         }
//     }
// }


