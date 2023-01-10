// help with understanding this code 

let remaining = 10;

document.getElementById("seconds").innerHTML = remaining;

// call countdown timer function
countdown();

// create the countdown function
function countdown() {

    let timerInterval = setInterval(function () {

        if (remaining > 0) {

            remaining--;
            console.log(remaining)

            // countdown timer digits
            document.getElementById("seconds").innerHTML = remaining;
            // add the timer to html element label w feedback
            document.getElementById("timer_update").innerHTML = `Timer ends in : ${remaining} seconds`;
        }

        // if we're at 5 seconds (or less)
        // if (remaining <= 5) {
            // flash element 
            // this works but too slow (I want 100ms)
            // toggleFlash('seconds', 'black');

            // the inner setInterval (calls toggleFlash function)
            // let flashInterval = setInterval(toggleFlash('seconds', 'black'), {

            // // now this interval amount is ignored?
            // }, 500);

            // just callFlash (at the bottom of this doc) - even worse result!
            // callFlash();

            // just calling setInterval WITHIN this expression? 
            // setInterval
            // setInterval(function () {
            //     toggleFlash('seconds', 'black');
            //     // specify the time using interval timer 
            // }, 100);
        // }

        else if (remaining <= 0) {
            // stop timer 
            clearInterval(timerInterval)
            // stop flash
            // clearInterval(flashInterval)
            console.log(remaining)
            // change element text
            document.getElementById("timer_update").innerHTML = "Time's Up!";
        }
        // specify every second 
    }, 1000);
}


// the toggleFlash function:

// without the outer setInterval

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

// with the setInterval built in to the toggleFlash function 

// element and colour input args
// function toggleFlash(e, c) {

//     // setInterval within here ?
//     let flashInterval = setInterval(function () {

//         if (remaining <= 5) {
//             // set the flash
//             let colourCheck = document.getElementById(e).style.color;

//             // expression waits for 0
//             if (colourCheck === 'aquamarine') {
//                 // set colour to current c
//                 document.getElementById(e).style.color = c;
//             }
//             else {
//                 // switch back
//                 document.getElementById(e).style.color = "aquamarine";
//             }
//         }
//         else {
//             // we reached 0
//             clearInterval(flashInterval)
//         }

//     }, 100);
// }


// this gets the flash to work, but ALWAYS ON!

// how do I have this called on 5 seconds -> then stop at 0?

// setInterval
setInterval(function() {
    if (remaining <= 5) { 

    toggleFlash('seconds', 'black');
    }
// specify the time using interval timer 
}, 100);


// attempting to use another function to 'call' the flash interval separately 
// function callFlash() {
//     let flash = setInterval(function () {
//         // 
//         toggleFlash('seconds', 'black');
//     }, 100);
// }

