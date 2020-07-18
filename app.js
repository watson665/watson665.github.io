function game() {

let userChoice = prompt("Please enter rock, paper or scissors?");

let computerChoice = Math.ceil(Math.random()*3);
  if (computerChoice === 1) {
	computerChoice = "rock";
  } else if(computerChoice === 2) {
	computerChoice = "paper";
  } else {
	computerChoice = "scissors";
  } 
  //console.log(computerChoice);

 //compare betwen user input & randomly generetaed pc choice 
let compare = function(choice1,choice2) {
    
    if (choice1 === choice2) {
        
        return `It's a tie!` ;
    }
    
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            return `Rock wins! You beat the computer!`;
        }
        else {
            return `Paper wins! The computer beat you!`;
        }
    }
    
    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            return `Paper wins! You beat the computer!`;
        }
        else {
            return `Scissor wins! The computer beat you!`;
            
        }
            
    }
    
    else if (choice1 === "scissors") {
        
        if (choice2 === "paper") {
            return `Scissors wins! You beat the computer!`;
        }
        else {
            return `Rock wins! The computer beat you!`;
        }
    }
    
    
    } 

    
    
   document.write("Computer picked: " + computerChoice + "<br>");
   document.write(compare(userChoice,computerChoice));

   setTimeout(newGame, 4000);

}

function newGame() {
    location.reload();
}
