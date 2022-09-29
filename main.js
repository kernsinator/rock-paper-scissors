
function getComputerChoice() {
    let computerChoice = random(3);
    let message;

    switch (computerChoice) {
        case 0:
            message = "Rock";
            break;
        case 1:
            message = "Paper";
            break;
        case 2:
            message = "Scissors";
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
    
}) {

}

getComputerChoice();
// Display welcome message

// Get input choice from user

// Get random choice for computer

// Compare user and computer choice and find winner

// Display win or lose message to user

// Offer choice to play again