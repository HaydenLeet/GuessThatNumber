// Chech the link in Console in Chrome Dev Tools
// console.log("Hello World");

let cat = "😸";

// Guess That Number
// Message to be used throughout the project
const enterNumText = 'Please enter a number greater than zero:';

// For restarting the game
let restartGame = true;

// For sorting the range of the number to be guessed
let rangeNum;

// For storing the number of attemps the user has left
let lives;

// For storing the user's guess
let guess;

// For storing the users response to play again or not play again
let playAgain;

// Starting alert message
alert('Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game');

// Game restarts as long as restartGame has a value of true
while (restartGame) {
    // Asks the user to enter a number to set the upper bound for the random number that will be created.
    rangeNum = prompt('Please enter a maximum number for the range');

    // Using the parseInt to attempt to convert the user's response into a number value
    rangeNum = parseInt(rangeNum)

    // Verifies the user's entry for a range is a number greater than zero
    // NOTE: All numbers, positive or negative, have a default boolean value of true, EXCEPT for zero, which has a default bollean value of false
    while (!rangeNum || rangeNum < 1) {
        rangeNum = propmt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }




    restartGame = false;
};