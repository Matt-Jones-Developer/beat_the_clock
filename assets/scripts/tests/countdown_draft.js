// a simple countdown - the app doesn't need a timer past 60 seconds

// set the countdown timer value 
let countdown = 10;

document.getElementById("seconds").innerHTML = countdown;

// calling setInterval as a function on the window 
window.setInterval(function () {

    // while cd is > 0 (running)
    if (countdown > 0) {
        // minus 1 from it 
        countdown--;

        // countdown timer digits
        document.getElementById("seconds").innerHTML = countdown;
        // add the timer to html element label w feedback
        document.getElementById("timer_update").innerHTML = `Timer ends in : ${countdown} seconds`;
    }

    // start flashing 5 seconds before timer ends 
    if (countdown <= 5) {
        // setInterval(toggleFlash, 100) // why doesn't this work?
        setInterval(function() {
            toggleFlash('seconds', 'black');
        // specify the time using interval timer 
        }, 100);
    }

    // stop timer and update element 
    else if (countdown <= 0) {
        // stop and set countdown to 0
        countdown = 0;
        // could clear instead here 
        // update user 
        document.getElementById("timer_update").innerHTML = "Time's Up!";
        // toggle colour on label
        toggleColour()
        
    }

    // we no longer have a function called countdown, so just ,1000 (1 sec)
}, 1000);


// colour text label on timer up and increase size 

function toggleColour() {
    let colour = '#fff'
    if (countdown <= 0) {
        colour = 'red';
    }
    // apply to label
    document.getElementById("timer_update").style.color = colour;
    document.getElementById("timer_update").style.fontSize = "50px";
}

// could also assign as a new variable 

// let font = document.getElementById("timer_update");
// timer_update.style.fontSize = "50px";


// flash digits on 0
// element and colour input args
function toggleFlash(e, c) {
    // set the flash
    let colourCheck = document.getElementById(e).style.color;
    // expression waits for 0
    if (colourCheck === 'aquamarine') {
        // set colour to current c
        document.getElementById(e).style.color = c;
    }
    else {
        // switch back
        document.getElementById(e).style.color = "aquamarine";
    }
}

// setInterval
// setInterval(function() {
//     toggleFlash('seconds', 'black');
// // specify the time using interval timer 
// }, 100);

// set intervals for:

// 3 seconds left: 100
// 0 seconds: 250

// restart timer function 

function restartTimer() {
    // if restart button pressed

    // then add 60 seconds to countdown

    // re-call the 
}




