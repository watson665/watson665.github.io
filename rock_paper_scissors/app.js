let user = document.querySelector('.userchoice');
let computer = document.querySelector('.computerchoice');
let startButton = document.querySelector('.start-button');
let result = document.querySelector('.result');
let userChoice;
//object shows which options win over the other options
let toWin = {
    Rock: 'Scissors', 
    Paper: 'Rock', 
    Scissors: 'Paper'}
//Add score variables
let userScore;
let computerScore;

//Start function start the game
    //What will happen after user clicks 'play'
startButton.addEventListener('click', function(){
    //disable start button 
    startButton.disabled = true;
    //no results
    result.innerHTML= '';
    //changes class name in HTML
    user.className = 'userchoice Rock countToThree';
    computer.className = 'computerchoice Rock countToThree';
});


//When countToThree ends this will occur next
document.addEventListener('animationend', function(){
    startButton.disabled = false;
    let computerChoice = getRandomChoice();
    let userChoice = getRandomChoice();
    computer.className = `computerChoice ${computerChoice}`;
    user.className = `userChoice ${userChoice}`;
    result.innerHTML = determineWinner(userChoice, computerChoice);
})

function getRandomChoice() {
    return Object.keys(toWin)[Math.floor(Math.random() * 3)];

}

function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return `It's a draw!`;
    } else if (userChoice === toWin[computerChoice]) {
        //add 1 to pc score
        //computerScore += 1;
        return `Computer Wins! ${computerChoice} beats ${userChoice}.`;
    } 
   //userScore += 1;
    return `You Win! ${userChoice} beats ${computerChoice}.`;
}








