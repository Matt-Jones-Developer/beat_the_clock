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


required:

localStorage - check whether any scores are present ?
.sort - make sure the returned scores array is in order (highest to lowest)
- loop through the sorted scores, adding a new item to the list (when new score created)
scores = scores.sort()

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


// create scoreboard array object - is this correct??

// let scoreboard = [
//     // # | name | score 
//     //index 0,1,2
//     { position1: ['player1', 10000] },
//     { position2: ['player2', 5000] },
//     { position3: ['player3', 100] },

// ]

// access an array value ('player name' or 'score')
//  these all access fine 
// console.log(pos1.position1[0]) // 'name1'
// console.log(pos1.position1[1]) // 10000

// console.log(pos2.position2[0]) // 'name1'
// console.log(pos2.position2[1]) // 10000

// console.log(pos3.position3[0]) // 'name1'
// console.log(pos3.position3[1]) // 10000

// // interpolate some
// console.log(`${pos1.position1[0]} tops the leaderboard with ${pos1.position1[1]} score!!`)
// console.log(`${pos3.position3[0]} barely scraps a position!! A measly ${pos3.position3[1]} score... more practice for this guy!`)

// // create vars for these ?

// let topScorer = pos1.position1[0];
// console.log(topScorer)

// console.log(topScorer[0]) // char 1 of length!
// console.log(topScorer.length) // must be max of 3 chars!



// the correct object array method!

let scoreboard = [
    // id | name | score 
    //index 0,1,2
    { id: 1, name: 'player1', score: 10 },
    { id: 2, name: 'player2', score: 5000 },
    { id: 3, name: 'player3', score: 100 },
    { id: 4, name: 'player4', score: 0 },
    { id: 5, name: 'player5', score: 0 }

]

// UPDATE: using indexes means no need for ID - see final solution leaderboard.js

console.log(typeof (scoreboard)) // object OK

// log the positions (able to access arrays to modify)

console.log(scoreboard[0]) // logs id 1 
console.log(scoreboard[1]) // logs id 2
console.log(scoreboard[2]) // logs id 3


// create access vars - 'define' array items and avoid undefined!
let pos1 = scoreboard[0];
console.log(pos1) //OK
let pos2 = scoreboard[1];
console.log(pos2) //OK
let pos3 = scoreboard[2];
console.log(pos3) //OK


// access an array value ('player name' or 'score')
//  these are WAY BETTER. correct and easily accessible via naming
console.log(pos1.id) // 1
console.log(pos1.name) // player1
console.log(pos1.score) // 10000

console.log(pos2.id) // 2
console.log(pos2.name) // player2
console.log(pos2.score) // 5000

console.log(pos3.id) // 3
console.log(pos3.name) // player3
console.log(pos3.score) // 100

// interpolate some
console.log(`${pos1.name} tops the leaderboard with ${pos1.score} score!!`)
console.log(`${pos3.name} barely scraps a position!! A measly ${pos3.score} score... more practice for this guy!`)

// create vars for these ?

let polePosition = pos1; // entire array 
console.log(polePosition)
let topScorer = pos1.name; // player name only 
console.log('topScorer var:', topScorer)

console.log(topScorer[0]) // char 1 of length! p
console.log(topScorer.length) // must be max of 3 chars! 

// when user enters a name: conditional
let playerName = 'abc'
console.log(playerName.length) // 3

// global score 
let score = 0; // global or local?
let playerInput; // how better to do this?
// force 3 max char length 
if (playerInput > playerName.length) {
    // update user or force/block more chars being entered 
    console.log('no more than 3 characters')
    alert('no more than 3 characters')
}

// point tester (point-up btn)

// this will become a updateScore() function 
// in which the var newScore will be added to, each time a question is answered correctly 

// function pointUp() {
//     // when btn clicked 
//     console.log('point up!')
//     // add a point to score
//     score++;
//     console.log(score)
//     // update element 
//     document.querySelector('#score-label').innerHTML = score;

//     // when player can enter initials
//     // if score === 100 (10 points per question?)
//     // if score is > than highScores[i] - in a for loop that iterates through the array
//     if (score === 10) {
//         // then prompt
//         playerInput = prompt('Enter your initials:')

//         // add player name to array
//         // if !localStorage ?? see my user login code 
//         if (score !== 0) {
//             const index = scoreboard.findIndex(object => {
//                 // debug
//                 console.log(object.id)
//                 // return element we need (id:1)
//                 return object.id === 1;
//             }); // 

//             if (index !== -1) {
//                 // assign entered name as the players name (p1)
//                 scoreboard[index].name = playerInput;
//                 // add score to score 
//                 scoreboard[index].score = score;
//                 // debug
//                 console.log(scoreboard[index].name)
//                 console.log(scoreboard)

//                 // update the element to add name to scoreboard 
//                 document.querySelector('.score-table .n1').innerHTML = playerInput;
//                 document.querySelector('.score-table .s1').innerHTML = score;
//             }
//         }
//     }
// }
// store player_input (player_name?) into the array

// -> if NO other entries (top scorer -> pos1)
// -> else if higher than the highest score - set to pos1
// -> else if ??? need a way to 'slot into into the correct position'
// -> else (< all other scores )


function pointUp() {
    // when btn clicked 
    console.log('point up!')
    // add a point to score
    score++;
    console.log(score)
    // update element 
    document.querySelector('#score-label').innerHTML = score;

    // when player can enter initials
    // if score === 100 (10 points per question?)
    // if score is > than highScores[i] - in a for loop that iterates through the array
    if (score === 10) {
        // then prompt
        playerInput = prompt('Enter your initials:')

        // add player name to array
        // if !localStorage ?? see my user login code 
        if (score !== 0) {
            const index = scoreboard.findIndex(object => {
                // debug
                console.log(object.id)
                // return element we need (id:1)
                return object.id === 1;
            });

            if (index !== -1) {
                // assign entered name as the players name (p1)
                scoreboard[index].name = playerInput;
                // add score to score 
                scoreboard[index].score = score;
                // debug
                console.log(scoreboard[index].name)
                console.log(scoreboard)

                // update the element to add name to scoreboard 
                document.querySelector('.score-table .n1').innerHTML = playerInput;
                document.querySelector('.score-table .s1').innerHTML = score;
            }
        }
    }
}


// finding and adding to the highScore


// highScore var that tracks what the highest score is
let highestScore = 0;

// iterate through the array 
// for (let i = 0; i < scoreboard[i].score.length; i++) {
//     const element = scoreboard.score[i];
//     console.log('loop i element', element)
// }

// find the highest value in the array index(score)
// add that index(score) to highScore var 

// IF newScore is > highScore 
// add a newScore to highScore

console.log('new highestscore', highestScore)

// how many players on the scoreboard ?

// store total
let totalPlayers = 0;
// iterate through the length of entries
for (let i = 0; i < scoreboard.length; i++) {
    // adding 1 to count for each loop
    totalPlayers++;
}

console.log('total players:',totalPlayers)

// how do we tap in to ALL the scores only?

// a single score?
scoreboard[0].score // OK

// all scores? ()
console.log('access score[via index]', scoreboard[0][1]) // undefined

// we must first create an new array to store ALL the scores in
let scores = [];

// iterate through all ?
for (let i = 0; i < 4; i++) {
    const element = scores += scoreboard[i].score;
    console.log('element:', element)

    // add each element to scores arr 
    scores += scoreboard[i].score;
    
}

console.log(scores)

scores = [
    // whats the non-idiot way of doing this?? I cannot get a for loop to work
    scoreboard[0].score, scoreboard[1].score, scoreboard[2].score, 
    scoreboard[3].score, scoreboard[4].score
];

console.log('scoresArray', scores)

// what is the for loop solution that would then allow to find the highest and lowest 

for (let i = 0; i < scores.length; i++) {
    const element = scores[i].score;
    
}

// sort array (highest to lowest)
console.log(scores.sort(function(a, b){return b - a}));

// into a var 
let sortedScores = scores.sort(function(a, b){return b - a});
console.log(sortedScores)


