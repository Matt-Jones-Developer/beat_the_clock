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



