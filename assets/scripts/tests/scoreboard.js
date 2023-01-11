// scoreboard logic 

// create a leaderboard that keeps tracks of players names and scores 
// also how many times that user has played the game 

/*
// pseudo

-> game starts (game_loop = 1)
-> question asked 
    -> if correct: score += 1
    -> else: -5 sec from countdown 

-> repeats until a) timer ends b) quiz beaten (10 questions?)
    -> game ends (game_loop = 0)
    -> add the score to an ordered list (ol) (1. 2. 3. etc)
    -> FIRST RUN:
        -> li1 += score (initial first score will go to top spot - unless we set some dummy scores)
    -> CONSEQUENT runs:
    // SOME SORT OF OL LIST ARRAY - TO BE ABLE TO ITERATE IT TO FIND THE SavedScore THAT IS LOWER than current score
    -> once li index is found -> place new score in that li item
    -> IF userScore < li1.score: -> 
    -> Add score to li (x)
    -> ELSE userScore > lil1.score -> Add score to li1 (top spot)
    -> .POP adds to the end - lowest of the scores
    -> .UNSHIFT adds to the FRONT of an array (if score is > all other saved scores) 
    -> SHUFFLE every other score DOWN or UP accordingly 

    
-> final score displayed INSIDE leaderboard -> writeScore() to textfield 
-> user input -> allow user to type 3 initials -> 3 character max LABEL 

-> keep an object array to store all user initials 
-> once entered (first time) -> initals and 'timesPlayed ++' even their 'topScore' ?
-> could use this object array as the main leaderboard array?? 

*/

// array:

// could have this:  - look over adv arrays tutorial files !!

// let advArray = [
//     [p1ayer:
//     {position: 1},
//     {name: 'name1'},
//     {score: 0}
//     ]
// ]


// create scoreboard array object

let scoreboard = [
    // # | name | score 
    //index 0,1,2
    { position1: ['player1', 10000] },
    { position2: ['player2', 5000] },
    { position3: ['player3', 100] },

]

console.log(typeof (scoreboard)) // object OK

// log the positions (able to access arrays to modify)

console.log(scoreboard[0]) // logs position 1 (Array(2))
console.log(scoreboard[1]) // logs position 2 (Array(2))
console.log(scoreboard[2]) // logs position 3 (Array(2))


// create access vars - 'define' array items and avoid undefined!
let pos1 = scoreboard[0];
console.log(pos1) //OK
let pos2 = scoreboard[1];
console.log(pos2) //OK
let pos3 = scoreboard[2];
console.log(pos3) //OK


// access an array value ('player name' or 'score')

console.log(pos1.position1[0]) // 'name1'
console.log(pos1.position1[1]) // 10000

console.log(pos2.position2[0]) // 'name1'
console.log(pos2.position2[1]) // 10000

console.log(pos3.position3[0]) // 'name1'
console.log(pos3.position3[1]) // 10000

// interpolate some
console.log(`${pos1.position1[0]} tops the leaderboard with ${pos1.position1[1]} points!!`)
console.log(`${pos3.position3[0]} barely scraps a position!! A measly ${pos3.position3[1]} points... more practice for this guy!`)

// create vars for these ?

let topScorer = pos1.position1[0];
console.log(topScorer)

console.log(topScorer[0]) // char 1 of length!
console.log(topScorer.length) // must be max of 3 chars!

// when user enters a name: conditional
let playerName = 'abc'
console.log(playerName.length) // 3

// global points 
let points = 0; // global or local?
let playerInput; // how better to do this?
// force 3 max char length 
if (playerInput > playerName.length) {
    // update user or force/block more chars being entered 
    console.log('no more than 3 characters')
    alert('no more than 3 characters')
}

// point tester (point-up btn)

function pointUp() {
    // when btn clicked 
    console.log('point up!')
    // add a point to score
    points++;
    console.log(points)
    // update element 
    document.querySelector('#score-label').innerHTML = points;

    // when player can enter initials
    // if points === 100
    if (points === 10) {
        // then prompt
        playerInput = prompt('Enter your initials:')
    }
}

// store player_input (player_name?) into the array

// -> if NO other entries (top scorer -> pos1)
// -> else if higher than the highest score - set to pos1
// -> else if ??? need a way to 'slot into into the correct position'
// -> else (< all other scores )


