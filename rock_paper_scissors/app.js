let user = document.querySelector('.userchoice');
let computer = document.querySelector('.computerchoice');
let startButton = document.querySelector('.start-button');
let result = document.querySelector('.result');
let userChoice;
let winStates = ['Rock', 'Paper', 'Scissors'];
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
    let computerchoice = winStates[Math.floor(Math.random() * 3)];
    computer.className = `computerchoice ${computerchoice}`
})










