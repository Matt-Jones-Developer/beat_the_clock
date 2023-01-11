// decent game logic 

// within html - a '<section class='game'> which holds all the game elements

// create a function to hold ALL the element queries for GAME

function game() {
    // create the queries
    let game = document.querySelector('section.game');
    // access children only when called
    let timer = game.querySelector('section.game span.timer')
    let start = game.querySelector('section.game start')
    let score = game.querySelector('section.game span.score')
    let highScore = game.querySelector('section.game ol.highscores')


    // all other function go INSIDE the gameloop - ideally!?

    // updateScore()

    // highScores()


    // the start button
    // when game function called - change score to 0 and start timer function
    // reset score and restart the quiz from a new random question 
    this.Start = function () {
        // reset score to 0
        score.innerHTML = '0';
        // reset timer here?
        // remaining = 0; // etc 
         // timer function INSIDE Start: 
         function countdown() {
            // timer logic here 
            remaining = 0;
         }

    };

}


