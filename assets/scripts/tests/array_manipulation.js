// lets have fun with array objects

// positions must stay ordered (solved with indexes)
// find, move, remove, add using:  .pop .unshift .splice .find .filter 

// position is implied by index! 
let scoreboard = [
    // position1: index 0
    { name: 'MAD', score: 5000 },
    // position2: index 1
    { name: 'KAZ', score: 500 },
    // position3: index 2
    { name: 'KRS', score: 1000 },
    // position4: index 3
    { name: 'REM', score: 10 },
    // position5: index 4
    { name: 'DIM', score: 50 },

]

// log the initial scoreboard array
console.log("\nOriginal, unsorted array:", scoreboard);

// keep scores sorted (each time a new object added include this function call)
sortScores()

// these start out 'sorted' by force;
// we need to keep array sorted each append - that keeps the scoreboard in correct order 

// sort function
function sortScores() {
    // sort object by score
    scoreboard.sort(function (a, b) {
        return b.score - a.score;
    });
    // check
    // console.log("\nSort by (score)", scoreboard);
}

// alternative define as a new variable (required?)
// let sortedScoreboard = scoreboard.sort(function(a, b){return b - a}) // ascending
// 
// let sortedScoreboard = scoreboard.sort(function (a, b) { return a - b }) // descending 
// // check 
// console.log('sorted scoreboard:', sortedScoreboard)

// console intro
console.log('list of Top Scorers (1-5):\n');

// defining objects 

let pos1 = scoreboard[0];
console.log("#1", pos1) // object[i]: {name: 'KAZ' score: 5000}
let pos2 = scoreboard[1];
console.log("#2", pos2)
let pos3 = scoreboard[2];
console.log("#3", pos3)
let pos4 = scoreboard[3];
console.log("#4", pos4)
let pos5 = scoreboard[4];
console.log("#5", pos5)

// accessing players scores only 
console.log('#1 topScore:', pos1.score) // 5000
// check its type 
console.log('pos1 type:', typeof (pos1)); // object
// type of an object value
console.log('pos1.score type:', typeof (pos1.score)); // number

// // define some globals 
let score = 0;
let highScore = pos1.score; // set the initial highScore to pos1
// log high score var
console.log('highScore:', highScore) // 5000
// empty array to store new objects in ?
let highScores = [];

// // new players (as tests)
newPlayer = { name: 'NEW', score: 100000 }; // index 2 would be right (3rd place)
// console.log('newPlayer is type:', typeof (newPlayer)) // object 
// access score
console.log('new (newPlayer) score:', newPlayer.score);


// not needed but if we are testing a low or a very high score (option)
// // a low scoring player 
// let lowPlayer = { name: 'LOW', score: 6 }; // wouldn't make the board 
// // access score
// console.log('new (lowPlayer) score:', lowPlayer.score);

// // new highest scoring player 
// let highPlayer = { name: 'WIN', score: 600000 }; // new highScore + #1 object position in scoreboard 
// // access score
// console.log('new (highPlayer) score:', highPlayer.score);

// // of the 5 available scoreboard positions:

// call the function for qualifying 
qualify()

// does newPlayer make the scoreboard? YES - pos3, index 2

function qualify() {
    // check to see if newPlayer makes the board 
    if (newPlayer.score < parseInt(pos5.score)) {
        // log - you failed
        console.log(`You failed to make the scoreboard ${newPlayer.name}, try again!`)

        // array remains the same 
        console.log('Scoreboard:', scoreboard)
    }

    else {
        // you made it!
        console.log("You made the scoreboard!")
        // .push (new player score added to scoreboard)
        scoreboard.push(newPlayer)
        // check
        // console.log('A newPlayer added to scoreboard:', scoreboard) // 6
        // re-sort the array
        sortScores()
        // pop the 6th entry off the board 
        scoreboard.pop()

        // the updated array
        console.log('A newPlayer added to scoreboard:', scoreboard)

        // check against highScore
        newHighScore()

    }
}

// call isNewHigh ? - the highscore checker - redundant function 
// isNewHigh()
// // if newPlayer.score > pos1 -> add it to the top of the scoreboard!

// function isNewHigh() {
//     // its a new high, add object to the array
//     if (newPlayer.score > pos1.score) { // pos1 = scoreboard[0].score
//         // update the board with new object
//         // scoreboard.unshift(newPlayer)
//         // test
//         console.log(scoreboard) // great, highPlayer was added to the scoreboard

//         // update highScore function 
//         newHighScore()

//         // pop off the bottom entry (5 max!)
//         // scoreboard.pop()
//     }

//     else {
//         console.log("Good effort, but you didn't beat the high score!")
//     }
// }

// call function for new highscore variable (If you beat highScore, you get a celebration!±)
// newHighScore() // not called UNTIL a high is actually achieved 

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
        // some form of animated gif or otherwise to celebrate being 1st place
        // TODO
    }
    else {
        console.log("not enough for top place though.")
    }
}


// // OK, so now we need manipulation to determine where an average score would go
// // Also, adjust the rest of the objects, including 'popping' the lower one off the array


// console.log('updated scorebaord:', scoreboard)

// // if there an average scorer ( pos2 -> pos5) we need to splice the array
// newScore()
// // splice function that adds newPlayer in the correct position, checks to see WHERE it goes,
// // and removes the last entry

// function newScore() {
//     // x needs to be the correct index!
//     x = 3;
//     // splice it into place 
//     scoreboard.splice(x, 1, newPlayer)
// }

// console.log("updated 'spliced' scorebaord:", scoreboard)

// // pop the last one (we only want 5 positions)

// scoreboard.pop()

// console.log("updated 'spliced' scorebaord:", scoreboard)

// // setting x (conditional that determines the index (the x))

// // find? - cannot use .find on an object element? (scoreboard.score.find) ...
// // solution: specify find(i => i.score) // will search for all scores lower!
// let findScore = scoreboard.find(i => i.score < newPlayer.score);
// console.log('lower score found:', findScore) // returns KRS/50  = true 1 object found

// // now sort the objects (newPlayer)
// if (newPlayer.score < findScore) {
//     // add it above this score 

// }

// // setting x (conditional that determines the index (the x))
// function newScore() {
//     // find - cannot use .find on an object element? (scoreboard.score.find) ...
//     // solution: specify find(i => i.score) // will search for all scores lower!
//     let findScore = scoreboard.find(i => i.score < newPlayer.score);
//     console.log(findScore) // returns KRS/50  = true 1 object found

//     // now sort the objects (newPlayer)
//     if (newPlayer.score < findScore) {
//         // add it above this score 
//         x = findScore[0];
//     }
//     // x needs to be the correct index!
//     x = 3;
//     // splice it into place 
//     scoreboard.splice(x, 1, newPlayer)
// }