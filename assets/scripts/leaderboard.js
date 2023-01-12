// leaderboard object array that keeps tracks of players names and scores 

// LOGIC: we may want to check whether a score is === a current score, which pushes that older one below/ or removes??

// create object array - sorting doesn't matter
let scoreboard = [
    // position1: index 0
    { name: 'MAD', score: 5000, plays: 0 },
    // position2: index 1
    { name: 'ZAZ', score: 500, plays: 0 },
    // position3: index 2
    { name: 'KRS', score: 1000, plays: 0 },
    // position4: index 3
    { name: 'REM', score: 800, plays: 0 },
    // position5: index 4
    { name: 'DIM', score: 100, plays: 0 }

]

// keep scores sorted
sortScores()

// sort function
function sortScores() {
    // sort object by score
    scoreboard.sort(function (a, b) {
        return b.score - a.score;
    });
}

// define objects 

let pos1 = scoreboard[0];
console.log("#1", pos1) // object[i]: {name: 'MAD' score: 5000}
let pos2 = scoreboard[1];
console.log("#2", pos2)
let pos3 = scoreboard[2];
console.log("#3", pos3)
let pos4 = scoreboard[3];
console.log("#4", pos4)
let pos5 = scoreboard[4];
console.log("#5", pos5)

// querySelector these objects to the page 
// n1 = name s1 = score r1 = runs/plays (per player x 5)
document.querySelector('.score-table .n1').innerHTML = pos1.name;
document.querySelector('.score-table .s1').innerHTML = pos1.score;
document.querySelector('.score-table .r1').innerHTML = pos1.plays;

document.querySelector('.score-table .n2').innerHTML = pos2.name;
document.querySelector('.score-table .s2').innerHTML = pos2.score;
document.querySelector('.score-table .r2').innerHTML = pos2.plays;

document.querySelector('.score-table .n3').innerHTML = pos3.name;
document.querySelector('.score-table .s3').innerHTML = pos3.score;
document.querySelector('.score-table .r3').innerHTML = pos3.plays;

document.querySelector('.score-table .n4').innerHTML = pos4.name;
document.querySelector('.score-table .s4').innerHTML = pos4.score;
document.querySelector('.score-table .r4').innerHTML = pos4.plays;

document.querySelector('.score-table .n5').innerHTML = pos5.name;
document.querySelector('.score-table .s5').innerHTML = pos5.score;
document.querySelector('.score-table .r5').innerHTML = pos5.plays;

// for loop for these objects into correct elements on scoreboard  // KISS vs DRY??

// for (var i = 0; i < '.score-table'.length; i++) {
//     '.score-table'[i].setAttribute...;
//    }

// try using ... and forEach to iterate?
// let scoreTable = document.querySelectorAll('.score-table');
// let tableArray = [...scoreTable];
// tableArray.forEach(scoreTable => {
//     // set each pos.name and pos.score to correct elements 
//     document.querySelector('.score-table .n1').innerHTML = pos1.name;
//     document.querySelector('.score-table .s1').innerHTML = pos1.score;
//     document.querySelector('.score-table .r1').innerHTML = pos1.plays;
// });

// globals 

// (newPlayer object) 'template' - starting object for all new players
let newPlayer = { name: 'NEW', score: 0 };

// (newPlayer === 'score')
// score (current) - why is this not assigning as the same value? Ln 121 we have to set both to ++ ??
let score = newPlayer.score;

// initial highScore to pos1
let highScore = pos1.score;

// allow input to be accessed globally 
let playerInput = '';



// call the function - testing 
// qualify()

// Check if score qualifies for leaderboard 
function qualify() {
    // check if newPlayer < lowest score
    if (newPlayer.score < parseInt(pos5.score)) {
        // log - you failed
        console.log(`You failed to make the scoreboard ${newPlayer.name}, try again!`)
        // array remains the same 
        console.log('Scoreboard:', scoreboard)
    }

    // what about if the newPlayer.score is === a current score??

    else {
        // you made it!
        console.log("You made the scoreboard!")
        // edit newPlayer first
        // prompt for initials 
        playerInput = prompt('Enter your initials:')
        // set playerInput to newPlayer.name
        newPlayer.name = playerInput;
        // debug
        console.log('playInput = newPlayer.name?: ', playerInput, newPlayer.name)

        // .push (new player score added to scoreboard)
        scoreboard.push(newPlayer)
        // re-sort the array
        sortScores()
        // pop the 6th entry off the board 
        scoreboard.pop()
        // the updated array
        console.log('A newPlayer added to scoreboard:', scoreboard)

        // add newPlayer to correct element?
        // ISSUE: so, the array updates to the correct position, 
        // how do we get the correct .n and .s elements?
        document.querySelector('.score-table .n5').innerHTML = playerInput;
        document.querySelector('.score-table .s5').innerHTML = score;

        // check against highScore
        newHighScore()

    }
}

// does newPlayer hold the new highScore?
function newHighScore() {
    // if playerScore > highScore 
    if (newPlayer.score > highScore) {

        // alert
        console.log("new highScorer!")
        // clear the highScore 
        highScore = 0;
        // set it as the new highScore 
        highScore += newPlayer.score;
        console.log("new highScore:", highScore)
        console.log(`Congrats! You are top of the leaderboard, ${newPlayer.name}!`)
        // update the elements of Top Score #1
        document.querySelector('.score-table .n1').innerHTML = playerInput;
        document.querySelector('.score-table .s1').innerHTML = score;
        // some form of animated gif or otherwise to celebrate being 1st place
        // TODO
    }
    else {
        console.log("not enough for top place though.")
    }
}

// test function that adds a point to user NEW's .score (each press)

function pointUp() {
    // when btn clicked 
    console.log('point up!')
    // add a point to score - but award 100 points per answer
    score += 100
    // also add to newPlayer score ? why need both if they're assigned to each other above?
    newPlayer.score += 100;
    console.log('score & newPlayer.score:', score, newPlayer.score)
    // update element 
    document.querySelector('#score-label').innerHTML = score;

    // when player can enter initials
    // if score is > than highScores[i] - in a for loop that iterates through the array?
    // or a set score for now
    if (score > 1000) {

        // call the qualify function
        qualify()

        // to add to Qualify function:
        // then prompt
        // playerInput = prompt('Enter your initials:')
        // set those initials to newPlayer.name - this could be called within QUALIFY!

        // add player name to array
        // if !localStorage ?? see my user login code 
        // if (score !== 0) {
        //     let findScore = scoreboard.find(i => i.score < newPlayer.score);
        //     console.log('lower score found:', findScore) // returns KRS/50  = true 1 object found

        //     // return the found
        //     return findScore;
        // }

        // confused here! ...

        // a findIndex of the lowest score 
        const index = scoreboard.findIndex(object => {
            // debug
            console.log('log all objects:', object, object.score)
            // return element we need (id:1)
            return object.score === 1;
        });

        if (index !== -1) {
            // assign entered name as the players name (n1)
            scoreboard[index].name = playerInput;
            // add score to score (s1)
            scoreboard[index].score = score;
            // debug
            console.log('new indexes name:', scoreboard[index].name)
            console.log('new scoreboard:', scoreboard)

            // update the element to add name to scoreboard 
            // document.querySelector('.score-table .n1').innerHTML = playerInput;
            // document.querySelector('.score-table .s1').innerHTML = score;
        }
    }
}
// }
// }