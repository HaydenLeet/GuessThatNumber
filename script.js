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

    // Create the random number usingthe range number entered by the user
    rangeNum = Math.floor(Math.random() * rangeNum) + 1;
    console.log(randomNum);
    
    // Prompts user to enter a number of attempts (lives) allowed (e.g. the number of guesses)
    lives = parseInt(prompt('Please enter a number of attemps allowed:'));
    console.log(lives);

    // Verifying the user's entry for a number of attemps allowed is a number greater than zero and equal to or less than the range they set
    while (!lives || lives < 1 || lives > rangeNum) {
        lives = parseInt(prompt('Please enter a number of attemps allowed:'));
    }

    // Asks the user to enter a guess in the range of 
    guess = prompt(`Please enter a guess from 1 to ${rangeNum} You have ${lives} live(s) left.`);

    // Continue looping until the user guesses the correct number or runs out of attemps. NOTE: As a loop is set up, the BREAK keyword is run
    while (true) {

        // Displays the number when a code word is entered
        if (guess === 'pickle') {
            alert(`Pssst... the number is ${randomNum}`)
            guess = prompt(`Please enter a guess 1 to ${rangeNum}. You have ${lives} live(s) left.`);
        }

        // Tries to convert the user's guess into a number
        guess = parseInt(guess);


        
        
        
        // Move when needed
        break;
    }
    // Remove when needed
    restartGame = false;
};