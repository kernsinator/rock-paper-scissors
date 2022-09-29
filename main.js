
function getComputerSelection() {
    let computerSelection = random(3);
    let message;

    switch (computerSelection) {
        case 0:
            message = "rock";
            break;
        case 1:
            message = "paper";
            break;
        case 2:
            message = "scissors";
            break;
        default:
            message = "Uh oh, this was not supposed to happen";
    }
    return message;
}

// Return random number from 0 - upper boundary that is passed as argument
function random(upperBound) {
    return Math.floor(Math.random() * upperBound);
}

function playRound(playerSelection, computerSelection) {
    
    console.log(`Computer chose ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if (playerSelection === "rock" ) {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper"
        } else {
            return "You Win! Paper beats Rock"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        } else {
            return "You Win! Scissors beats Paper"
        }
    }
    
    return "There has been an error";

}

function getPlayerSelection() {
    let playerSelection = prompt("Please choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function game() {
    console.log("Welcome to this 5-round game of RPS");
    for (let i = 0; i < 5; i++)  {
        playRound(getPlayerSelection(), getComputerSelection())
    }
}

game();

// Display welcome message

// Get input choice from user

// Get random choice for computer

// Compare user and computer choice and find winner

// Display win or lose message to user

// Offer choice to play again