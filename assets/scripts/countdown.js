// The countdown timer function 

let remaining = 5;

document.getElementById("seconds").innerHTML = remaining;

// start game 
startGame()
// call countdown timer function
function startGame() {
    if (remaining != 0) {
        countdown()
    } else {
        clearInterval(timerInterval);
    }
}


// create the countdown
function countdown() {

    // reset timer digits 
    document.querySelector('#seconds').style.fontSize = "17rem";;
    document.getElementById('seconds').style.color = "aquamarine";
    document.querySelector('#seconds').innerHTML = remaining;
    // apply to label
    document.getElementById("timer_update").style.color = '#fff';
    document.getElementById("timer_update").style.fontSize = "30px";



    let timerInterval = setInterval(function () {

        if (remaining > 0) {

            remaining--;
            // console.log(remaining)

            // countdown timer digits
            document.getElementById("seconds").innerHTML = remaining;
            // add the timer to html element label w feedback
            document.getElementById("timer_update").innerHTML = `Timer ends in : ${remaining} seconds`;
        }

        else if (remaining <= 0) {
            // stop timer 
            remaining = 0; // force to 0
            console.log('remaining:', remaining) // 1?
            // change element text
            document.getElementById("timer_update").innerHTML = "Time's Up!";
            // toggle colour on label
            toggleColour();

            // clear timer / stop running? or @ startGame ?
            clearInterval(timerInterval);
            // clear 0 digit on timer end 
            // would be cool to add an image here - like a 'game over' or an emblem
            document.querySelector('#seconds').innerHTML = "\n\nGAME\nOVER";
            // adjust the size so it fits inside the box
            document.querySelector('#seconds').style.fontSize = "130px";;

            // update score

            // create a newScore 
            // add to highScores array entry using .sort 
            // we need to check IF newScore is < or > than highScores
            // IF newScore > highScores[i] then .splice it into the array
            // for highScores[i] -> highScores.splice(i, parseInt(newScore)) ?
        }
        // specify every second 
    }, 1000);
}

// colour text label on timer up and increase size 

function toggleColour() {
    let colour = '#fff'
    if (remaining <= 0) {
        colour = 'red';
    }
    // apply to label
    document.getElementById("timer_update").style.color = colour;
    document.getElementById("timer_update").style.fontSize = "50px";
}

// the toggleFlash function:

// element and colour input args
function toggleFlash(e, c) {

    // set the flash
    let colourCheck = document.getElementById(e).style.color;
    // if its one color 
    if (colourCheck === 'aquamarine') {
        // set colour to current c
        document.getElementById(e).style.color = c;
    }
    else {
        // then switch back
        document.getElementById(e).style.color = "aquamarine";
    }

}

// start flash interval (without disrupting main timer)
setInterval(function () {
    if (remaining <= 5) {
        // start flashing
        toggleFlash('seconds', 'black');
        // let intervalFlash = toggleFlash('seconds', 'black');
    }
    // stop flash if timer <= 0?
    else {
        // clearInterval(intervalFlash)
    }
    // this will always be 100 unless changed somewhere!
}, 100);


// restart timer function 

function restartTimer() {
    // if restart button pressed
    console.log('button pressed')
    // prevents restart if remaining != 0
    if (remaining <= 0) {
        // then add 60 seconds to countdown
        remaining = 10;
        // re-call the countdown function
        countdown()
    }

}