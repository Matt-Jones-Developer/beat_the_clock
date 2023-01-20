// leaderboard / scoring logic 

// create object array
let scoreboard = [
    // position1: index 0
    { name: 'MAD', score: 500, plays: 0 },
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

// define objects - for position recall

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

// globals 

// (newPlayer object) 'template' - starting object for all new players
let newPlayer = { name: 'NEW', score: 0, plays: 0 };

// length test
// console.log('newPlayer.name length:', newPlayer.name.length)

// (newPlayer === 'score')
// score (current) - why is this not assigning as the same value? Ln 121 we have to set both to ++ ??
let score = newPlayer.score;

// initial highScore to pos1
let highScore = pos1.score;

// allow input to be accessed globally 
let playerInput = '';

// clear board (reset to initial array)
function clearBoard() {

    // clear the array items 

    // clear the localStorage?
    
}


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
        // edit newPlayer first: do while

        // // prompt for initials 
        // playerInput = prompt('Enter your initials:').toUpperCase()

        // prompt for initials 
        playerInput = prompt('Enter your initials:').toUpperCase();

        // its correct length
        // set playerInput to newPlayer.name
        newPlayer.name = playerInput;
        // debug
        console.log('playInput = newPlayer.name?: ', playerInput, newPlayer.name)

        // add one to 'play count'
        newPlayer.plays++;
        // .push (new player score added to scoreboard)
        scoreboard.push(newPlayer);
        // re-sort the array
        sortScores();
        // pop the 6th entry off the board 
        scoreboard.pop();
        // the updated array
        console.log('A newPlayer added to scoreboard:', scoreboard);

        // check against highScore - alert: IF Top Score
        newHighScore();

        // clear the current board
        // issue: this clears the board-titles too? gah must separate them!! -as another function
        document.querySelector('.boardArray').textContent = ''; // 'nope!` 
        // add newPlayer to correct element
        updateScoreboard();
        // add the new scoreboard to localStorage 
        localStorage.setItem("scoreboard", JSON.stringify(scoreboard));

    }

}

// call updateScoreboard on load (should be via localStorage AFTER thIS RUN)
// updateScoreboard()

// current issue - this will print ALL the names and scores onto the FIRST ROW of the table 

// I want - 
function updateScoreboard() {
    // added it, cant style it!! 
    let position = 0;
    // position.setAttribute('style', 'backgroundColor:green; fontSize: 2em;');
    // define an array of scoreboard elements and append them to the html
    for (let i = 0; i < scoreboard.length; i++) {
        // create the vars to hold each ROW TR x 5
        let row = document.createElement('tr');
        // set row[0] style properties like before?
        // row.setAttribute("style", "color: red; fontSize:30px")
        // increment position by 1 each pass 
        position++;
        // the 3 cells for each row <td>
        let names = document.createElement('td');
        let scores = document.createElement('td');
        let plays = document.createElement('td');

        // set td names content to array index
        names.textContent = scoreboard[i].name;
        scores.textContent = scoreboard[i].score;
        plays.textContent = scoreboard[i].plays;

        // declare parent (scoreboard)
        let parent = document.querySelector('.boardArray');

        // append the rows
        parent.append(row);
        // append cells
        parent.append(position);
        parent.append(names);
        parent.append(scores);
        parent.append(plays);

    }

    // // set row[0] style properties like before?
    // row[0],setAttribute("style", "color: red; fontSize:30px")
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
        // update the elements of Top Score #1 to GOLD
        // document.pos5.setAttribute('style', 'color: gold')
        // document.querySelector('.score-table .n1').innerHTML = playerInput;
        // document.querySelector('.score-table .s1').innerHTML = score;
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
    document.querySelector('#score-label').innerHTML = 'Score: ' + score;

    // when player can enter initials
    // if score is > than highScores[i] - in a for loop that iterates through the array?
    // or a set score for now
    if (index === 10) {

        // call the qualify function
        qualify()

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