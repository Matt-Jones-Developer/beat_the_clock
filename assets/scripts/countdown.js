// The countdown timer function 

let remaining = 20;

document.getElementById("seconds").innerHTML = remaining;

// start game 
startGame()
// call countdown timer function
function startGame() {

    // start/stop timer
    if (remaining != 0) {
        countdown()
    } else {
        clearInterval(timerInterval);
    }
}


// create the countdown
function countdown() {

    // reset timer digits 
    document.querySelector('#seconds').style.fontSize = "16rem";;
    document.getElementById('seconds').style.color = "#75FB55";
    document.querySelector('#seconds').style.paddingTop = "0rem";
    document.querySelector('#seconds').innerHTML = remaining;
    // apply to label
    // document.getElementById("timer_update").style.color = '#fff';
    // document.getElementById("timer_update").style.fontSize = "30px";



    let timerInterval = setInterval(function () {

        if (remaining > 0) {

            remaining--;
            // console.log(remaining)

            // countdown timer digits
            document.getElementById("seconds").innerHTML = remaining;
            // add the timer to html element label w feedback
            // document.getElementById("timer_update").innerHTML = `Timer ends in : ${remaining} seconds`;
        }

        else if (remaining <= 0) {
            // stop timer 
            remaining = 0; // force to 0
            console.log('remaining:', remaining) // 1?
            // change element text
            // document.getElementById("timer_update").innerHTML = "Time's Up!";
            // document.querySelector('#timer_update').style.fontSize = "60px";
            // toggle colour on label
            // toggleColour();

            // clear timer / stop running? or @ startGame ?
            clearInterval(timerInterval);
            // clear 0 digit on timer end 
            // stop the damn flashing 
            // document.getElementById('seconds').style.color = "black";
            // would be cool to add an image here - like a 'game over' or an emblem
            document.querySelector('#seconds').innerHTML = "\nGAME\nOVER";
            // adjust the size so it fits inside the box
            document.querySelector('#seconds').style.fontSize = "110px";
            // add padding to center it 
            document.querySelector('#seconds').style.paddingTop = "2rem";

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
    document.getElementById("timer_update").style.fontSize = "40px";
    document.getElementById("timer_update").style.textAlign = "center";
}

// the toggleFlash function:

// element and colour input args
function toggleFlash(e, c) {

    // set the flash
    let colourCheck = document.getElementById(e).style.color;
    // if its one color 
    if (colourCheck === 'pink') {
        // set colour to current c
        document.getElementById(e).style.color = c;
    }
    else {
        // then switch back
        document.getElementById(e).style.color = 'pink';
    }

}

// start flash interval (without disrupting main timer)
setInterval(function () {
    if (remaining <= 5) {
        // start flashing
        let intervalFlash = toggleFlash('seconds', 'black');
        // let intervalFlash = toggleFlash('seconds', 'black');
    }
    // stop flash if timer <= 0?
    else {
        // why is this undefined?  I defined and called above??
        // clearInterval(intervalFlash);
        // force to black (hide)
        // document.getElementById('seconds').style.color = "black"; // fail
    }

}, 100);

// restart timer function 
function restartTimer() {
    // if restart button pressed
    console.log('button pressed')
    // prevents restart if remaining != 0
    if (remaining <= 0) {
        // then add 60 seconds to countdown
        remaining = 60;
        // re-call the countdown function
        countdown()
    }

}