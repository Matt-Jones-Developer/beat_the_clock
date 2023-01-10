// a simple countdown countdown

// function countdown() {

//     // create the variables needed
//     // total time allowance (on the clock)
//     let remaining = 60; // we'll start at 1 min

//     // minutes and seconds calc - how would we calculate this?

//     // 1000 ms in 1 sec (1000)
//     // 60000 ms in 60 seconds (60000) (or 1000*60)

//     // use remainder operator to get to 0 (1000*60) % 60 (0)

//     // 1000*60 = 60000
//     // 1000*60 % 60 = 0
//     // how to get a fraction of a sec (ms?)
//     // sec / ms % sec

//     // 60 / (1000*60) % 60 = 0.001 of a second
//     const mins_test = 60 / (1000 * 60) % 60;
//     // seconds is similar, just 1000 % 60 (40 because the remainder from 100-60) (OR its 40% of 1000!)
//     const secs_test1 = 1000 % 60;
//     const secs_test2 = remaining / 1000 % 60;
//     // Math.floor = 0 (end of countdown)
//     // mins var
//     const mins = Math.floor(remaining / (1000 * 60) % 60);
//     // secs var 
//     const secs = Math.floor(remaining / 1000 % 60);
//     // debug:
//     // console.log(mins_test) // 0.001
//     // console.log(secs_test1) // 40 
//     // console.log(secs_test2) // 0.06 seconds === 60 ms 
//     // console.log(mins) // 0
//     // console.log(secs) // 0

//     // a loop that iterates from 60 - 0

//     // so, this counts down from 59, but loops at 30?
//     // it is creating a number each loop, but displaying/subtracting all at once until 30?
//     for (let i = 0; i < remaining; i++) {

//         if (remaining > 0) {
//             remaining--;
//             // console.log(remaining)
//         }
//         console.log(remaining)
//         remaining -= secs;
//     }
//     // console.log(remaining) // 30?
//     // add an expression that subtracts 1 (while remaining > 0)
//     // this is not updating 
//     // if (remaining > 0) {
//     //     remaining --;
//     //     console.log(remaining)
//     // }

//     // but we want the countdown to start at 60, decrement by 1 each second (or pass) 

//     // display within html
//     document.querySelector(".minutes").innerHTML = mins; // will display .0
//     document.querySelector(".seconds").innerHTML = secs; // will display .0 (OK)
// }

// countdown()
// use built in setInterval() countdown handler
// setInterval(countdown, 1000); // we have a ticking '1 sec' interval clock-ish countdown! (00)


// include a way to actually countdown (above counts at 0 to 0?)

// this just prints NaN since we do not understand what logic to apply here!! 
// let counter = 60;

// // add the Date() logic that allows to set the remaining within the function
// const countdown = new Date();

// if (countdown.getDate() + 1 == countdown.getDate() + 1 > counter) {
//     // subtract 1 from secs?
//     countdown 
// }

// function countdown() {

//     // add the Date() countdown to the function
//     const remaining = new Date(`00:00`) - new Date();

//     // mins var
//     const mins = Math.floor(remaining / (1000 * 60) % 60);
//     // secs var 
//     const secs = Math.floor(remaining / 1000 % 60);

//     console.log(mins) // 0
//     console.log(secs) // 0

//     // display within html
//     document.querySelector(".minutes").innerHTML = mins; 
//     document.querySelector(".seconds").innerHTML = secs; 
// }

// countdown()
// // use built in setInterval() countdown handler
// setInterval(countdown, 1000);

// lets simplify this - do we even need a minutes timer?  I think iit should be the most questions answered in a minute (60 seconds)

// game name: "Wrong in 60 seconds" !! love it 

// SIMPLER:::

// Lets try using the window countdown instead 
// let countdown = 5;

// window.setInterval(function() {
//     // if countdown > 0
//     if (countdown > 0) {
//     // then minus 1 from countdown 
//         countdown--;
//     // if countdown === 0;
//     if (countdown <= 0)
//     // then update the element 
//     document.getElementById("sec").innerHTML = "Time's Up!";
//     }
//     // results in straight to second if clause 
// its 0 before its 60??
// })

// Lets try using the window countdown instead 
let countdown = 5;

window.setInterval(function () {
    // if countdown > 0
    if (countdown > 0) {
        // then minus 1 from countdown 
        countdown--;
        // add the timer to html element !! oops
        document.getElementById("sec").innerHTML = `Timer ends in : ${countdown} seconds`;
    }
    else {
        // if countdown === 0;
        // then update the element 
        document.getElementById("sec").innerHTML = "Time's Up!";
    }
    // results in straight to else clause 

// why still noting??
// we are not calling the function!

}, 1000); // OK!!

// working! wooo!

// calling setInterval as a function on the window 
// else OR else if?? depends if there is an else required 
// window.setInterval(function () {

//     // while cd is > 0 (running)
//     if (countdown > 0) {
//         // minus 1 from it 
//         countdown--;

//         // add the timer to html element 
//         document.getElementById("sec").innerHTML = `Timer ends in : ${countdown} seconds`;
//     }

//     // stop timer and update element 
//     else if (countdown <= 0) {
//         // stop and set countdown to 0?
//         countdown = 0;
//         // update user 
//         // this updates on load since countdown is 0 before it's set to 10 maybe??
//         document.getElementById("sec").innerHTML = "Time's Up!";
//     }


//     // we no longer have a function called countdown, so just ,1000 (1 sec)
// }, 1000);


