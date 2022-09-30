
let playerScore = 0;
let computerScore = 0;

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

function random(upperBound) {
    return Math.floor(Math.random() * upperBound);
}

function playRound(playerSelection, computerSelection) {
    console.log(`play choice : ${playerSelection} ${typeof(playerSelection)}`);
    
    console.log(`Computer chose ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if (playerSelection === "rock" ) {
        if (computerSelection === "paper") {
            computerScore++;
            return "Computer chooses Paper...You Lose! Paper beats Rock"
        } else {
            playerScore++;
            return "Computer chooses Scissors...You Win! Rock beats Scissors"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return "Computer chooses Scissors...You Lose! Scissors beats Paper"
        } else {
            playerScore++;
            return "Computer chooses Rock...You Win! Paper beats Rock"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "Computer chooses Rock...You Lose! Rock beats Scissors"
        } else {
            playerScore++;
            return "Computer chooses Paper...You Win! Scissors beats Paper"
        }
    }
    
    return "There has been an error";

}

function handleUserSelection(e) {
    const results = document.querySelector('.results')
    results.innerHTML = playRound(e.target.getAttribute("data-selection"), getComputerSelection());

    const playerScoreDisplay = document.querySelector('.player-score')
    playerScoreDisplay.innerHTML = playerScore
    const computerScoreDisplay = document.querySelector('.computer-score')
    computerScoreDisplay.innerHTML = computerScore

    if (playerScore === 5) {
        results.innerHTML = "You win the match!"
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        results.innerHTML = "You lost the match!"
        playerScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', handleUserSelection))

function getPlayerSelection() {
    // let playerSelection = prompt("Please choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function game() {
}

game();