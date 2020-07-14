/* 
Questions:
1. How to I make all of my functions work together to make a game ie how to make the computer & user choices communicate with eachother to ?
2. For the switch statement would you suggest I make that a string or variable?
3. How make use the userChoice function against the computerChoice function?
4. How do I make 5 rounds? Would I use a forloop or create a function?
5. After coding the functionality of the game in js, what are my next steps? 
*/

let userScore = 0;
let computerScore = 0;

//make a function start() to start the game
function start() {
    const startGame = alert (/* insert alert for user here*/);
    //sets score to 0
    resetScore();
    //run userChoice() function
    userChoice();
    };

//Create userChoice() function
function userChoice () {
    const input = prompt (/*question user if they are going to select Rock, Paper, or scissors*/);
    switch (input) {
        //is this even possible? can this be a string?
        case 'Rock': 
            input = 'Rock';
            /*not sure if I should make this a string or variable*/
            break;
        case 'Paper':
            input = 'Paper';
            break;
        case 'Scissors':
            input = 'Scissors';
            break;
        default:
            return 'Invalid answer. Please enter "Rock", "Paper", or "Scissors".'
    }
    return input;
};

//Create a function for computerChoice()
function computerChoice () {
    //using Math.random to generate random answers
    let pcChoice = Math.ceil(Math.random()* 3);
    //insert switch statement
    switch (pcChoice) {
        case 1:
            pcChoice = //Rock
            /*not sure if I should make this a string or variable*/
            break;
        case 2:
            pcChoice = //Paper
            break;
        case 3:
            pcChoice = //Scissors
            break;
        default:
            return 'error with computer choice'
    }
    return pcChoice;
};

//Create a callback function to compare userChoice() & computerChoice()
function compareChoices (choice1, choice2) = {
    //if else statements
    if (choice1 === choice2) {
        alert(" It's a draw! You and the computer selected the same thing.");
        //0 points returned 
        return 0;
        //how to pick a winner
    } else if (choice1 === 'rock' && choice2 === 'scissors') {
        alert ('You have won the round!');
        return 1;
    } else if (choice1 === 'paper' && choice2 === 'rock') {
        alert ('You have won the round!');
        return 1;
    } else if (choice1 === 'scissors' && choice2 === 'paper') {
        alert ('You have won the round!');
        return 1;
    } else {
        alert ('The computer won the round');
        return 2;
    } 
};

//keeps score of game 
function updateScore(result, points) {
    if (result === 1) {
        userScore += points;
    }
    if (result === 2) {
        computerScore += points;
    }
    if (result === 0) {
        userScore += 0;
        computerScore += 0;
    }
};

//reset score to 0
function resetScore() {
    userScore = 0;
    computerScore = 0;
};

// How would I create a function to make 5 rounds? stuck on this part. Ask Angel during one-on-one.

//Need to come up with a function for if the player won, loses, or it's a tie!
    // if else statement
function determineWinner() {
    if (userScore === computerScore) {
        alert ('It\'s a tie! No one won the game.');
    } else if (userScore > computerScore) {
        alert ('Congratulations you have won the game!');
    } else {
        alert ('The computer has won the game!')
    }
};

//use start() at the end of the game to restart the game
start();