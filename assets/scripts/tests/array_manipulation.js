// lets have fun with array objects

// positions must stay ordered (solved with indexes)
// find, move, remove, add using:  .pop .unshift .splice .find .filter 

// position is implied by index! 
let scoreboard = [
    // position1: index 0
    { name: 'MAD', score: 10000 },
    // position2: index 1
    { name: 'KAZ', score: 5000 },
    // position3: index 2
    { name: 'JAM', score: 10 },
    // position4: index 3
    { name: 'KRS', score: 50 },
    // position5: index 4
    { name: 'DIM', score: 100 },

]

// these start out 'sorted' by force;
// we need to add a sorted array that keeps the scoreboard in correct order 

// let sortedScoreboard = scoreboard.sort(function(a, b){return b - a})
// 
let sortedScoreboard = scoreboard.sort(function(a, b){return a - b})
// check 
console.log('sorted scoreboard:', sortedScoreboard)

// console intro
console.log('list of Top Scorers (1-5):\n');

// defining objects 

let pos1 = scoreboard[0];
console.log("#1", pos1) // object[i]: {name: 'MAD' score: 100}
let pos2 = scoreboard[1];
console.log("#1", pos2)
let pos3 = scoreboard[2];
console.log("#1", pos3)
let pos4 = scoreboard[3];
console.log("#1", pos4)
let pos5 = scoreboard[4];
console.log("#1", pos5)

// accessing players scores only 
console.log('#1 topScore:', pos1.score)
// check its type 
// console.log('score type:', typeof (pos1)); // object
// type of an object value
console.log('score type:', typeof (pos1.score)); // number

// define some globals 
let score = 0;
let highScore = pos1.score;
// log high score var
console.log('highScore:', highScore)
// empty array to store new objects in ?
let highScores = [];

// new players (as tests)
newPlayer = {name: 'NEW', score: 600}; // index 2 would be right (3rd place)
// console.log('newPlayer is type:', typeof (newPlayer)) // object 
// access score
console.log('Accessed newPlayer score:', newPlayer.score);

// a low scoring player 
let lowPlayer = {name: 'LOW', score: 6}; // wouldn't make the board 
// access score
console.log('Accessed lowPlayer score:', lowPlayer.score);

// new highest scoring player 
let highPlayer = {name: 'WIN', score: 600000}; // new highScore + #1 object position in scoreboard 
// access score
console.log('Accessed highPlayer score:', highPlayer.score);

// of the 5 available scoreboard positions:

// call the function for qualifying 
qualify()

// does newPlayer make the scoreboard? NO

function qualify() {
    // check to see if newPlayer makes the board 
    if (lowPlayer.score < parseInt(pos1.score)) {
        // log - you failed
        console.log("You failed to make the scoreboard")
    }

    else {
        // you made it!
        console.log("You made the scoreboard!")
    }
}

// call function for new highscore 
// newHighScore() // not called UNTIL a high is actually achieved 

// does newPlayer hold the new highScore?
function newHighScore() {
    // if playerScore > highScore 
    if (highPlayer.score > highScore) {

        // alert
        console.log("new highScorer!")
        // clear the highScore 
        highScore = 0;
        // set it as the new highScore 
        highScore += highPlayer.score;
        console.log("new highScore:", highScore)
    }
    else {
        console.log("not enough for top place.")
    }
}

// check value of highScore
console.log('new highScore!', highScore) // great!
console.log("Congrats! You are top of the leaderboard!")


// OK, so now we need the manipulation to determine where an average score would go
// Also, adjust the rest of the objects, including 'popping' the lower one off the array

// .push testing (get a nePlayer added to the scoreboard)

scoreboard.push(newPlayer)
// check
console.log('A newPlayer added to scoreboard:', scoreboard)


// call isNewHigh 
isNewHigh()
// if scorer > pos1 -> add it to the top of the scoreboard!

function isNewHigh() {
    // its a new high, add object to the array
    if (highPlayer.score > pos1.score) { // pos1 = scoreboard[0].score
        // update the board with new object
        scoreboard.unshift(highPlayer)
        // test
        console.log(scoreboard) // great, highPlayer was added to the scoreboard

        // update highScore variable 
        newHighScore()

        // pop off the bottom entry (5 max!)
        scoreboard.pop()
    }
}

console.log('updated scorebaord:', scoreboard)

// if there an average scorer ( pos2 -> pos5) we need to splice the array
newScore()
// splice function that adds newPlayer in the correct position, checks to see WHERE it goes,
// and removes the last entry

function newScore() {
    // x needs to be the correct index!
    x = 3;
    // splice it into place 
    scoreboard.splice(x, 1, newPlayer)
}

console.log("updated 'spliced' scorebaord:", scoreboard)

// pop the last one (we only want 5 positions)

scoreboard.pop()

console.log("updated 'spliced' scorebaord:", scoreboard)

// setting x (conditional that determines the index (the x))

// find? - cannot use .find on an object element? (scoreboard.score.find) ...
let findScore = scoreboard.find(score => scoreboard.score < newPlayer.score);
console.log(findScore)

// now sort the objects (newPlayer)
if (newPlayer.score < findScore) {
    // add it above this score 

}