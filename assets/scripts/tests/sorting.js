// quick object scoreboard sort test

var scoreboard = [
    { name: 'MAD', score: 25 },
    { name: 'KAZ', score: 300 },
    { name: 'PIL', score: 280 },
    { name: 'EEK', score: 5 },
    { name: 'WIN', score: 2500 }
];
// call
sortScores()

// sort function
function sortScores() {
    // // sort object by name
    // scoreboard.sort(function (a, b) {
    //     if (a.name < b.name) { return -1; }
    //     if (a.name > b.name) { return 1; }
    //     return 0;
    // });
    // console.log("Sort by (name):");
    // printscoreboard(scoreboard);

    // sort object by number property
    scoreboard.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log("\nSort by (score)", scoreboard);
    // if we want a separate printing function
    // printscoreboard(scoreboard);
}

// using forEach to print each item in the sorted array 

// // printing function
// function printscoreboard(scoreboard) {
//     scoreboard.forEach(function (item) {
//         console.log(item);
//     });
// }

// will it stay sorted? YES!
console.log(scoreboard)
