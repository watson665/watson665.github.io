let rock = document.getElementById('Rock');
let paper = document.getElementById('Paper');
let scissors = document.getElementById('Scissors');

let userChoice = prompt("Do you choose rock, paper or scissors?");

let computerChoice = Math.ceil(Math.random()*3);
  if (computerChoice === 1) {
	computerChoice = "rock";
  } else if(computerChoice === 2) {
	computerChoice = "paper";
  } else {
	computerChoice = "scissors";
  } 
  //console.log("Computer chooses: " + computerChoice);

let compare = function(choice1,choice2) {
    
    if (choice1 === choice2) {
        
        return "The result is a tie!" + " " + "Lets play again." ;
    }
    
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            return "rock wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + "<br>" + "Your really smart computer beat you.";
        }
    }
    
    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            return "paper wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + "<br>" + "Your really smart computer beat you.";
        }
            
    }
    
    else if (choice1 === "scissors") {
        
        if (choice2 === "rock") {
            return "rock wins" + "<br>" + "Your really smart computer beat you.";
        }
        else {
            return "scissors win" + "<br>" + "You beat the computer, nice job!";
        }
    }
    
    
    } //closes compare function

    
    
   document.write("Computer chose: " + computerChoice + "<br>");
   document.write(compare(userChoice,computerChoice));

/*
   function game() {
    let userChoice = prompt("Do you choose rock, paper or scissors?");

    let computerChoice = Math.ceil(Math.random()*3);
        if (computerChoice === 1) {
	    computerChoice = "rock";
        } else if(computerChoice === 2) {
	    computerChoice = "paper";
        } else {
	    computerChoice = "scissors";
        } 

    let compare = function(choice1,choice2) {
    
        if (choice1 === choice2) {
        
        return "The result is a tie!" + " " + "Lets play again." ;
    }
    
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            return "rock wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + "<br>" + "Your really smart computer beat you.";
        }
    }
    
    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            return "paper wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + "<br>" + "Your really smart computer beat you.";
        }
            
    }
    
    else if (choice1 === "scissors") {
        
        if (choice2 === "rock") {
            return "rock wins" + "<br>" + "Your really smart computer beat you.";
        }
        else {
            return "scissors win" + "<br>" + "You beat the computer, nice job!";
        }
    }
    
    
    } //closes compare function

    
   document.write("Computer chose: " + computerChoice + "<br>");
   document.write(compare(userChoice,computerChoice));

}
  /* 

/*
function randomComputerChoice() {
    let computerChoice = Math.ceil(Math.random()*3);
        if (computerChoice === 1) {
	    computerChoice = "rock";
        } else if(computerChoice === 2) {
	    computerChoice = "paper";
        } else {
	    computerChoice = "scissors";
        } 
    return computerChoice;
}
*/







