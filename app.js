let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = prompt("Select rock, paper, or scissors: ");
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return "It's a tie!";
            } else if (computerChoice === "paper") {
                computerScore++;
                return "You lose! Paper beats rock.";
            } else {
                humanScore++;
                return "You win! Rock beats scissors.";
            }
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                return "You win! Paper beats rock.";
            } else if (computerChoice === "paper") {
                return "It's a tie!";
            } else {
                computerScore++;
                return "You lose! Scissors beats paper.";
            }
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
                return "You lose! Rock beats scissors.";
            } else if (computerChoice === "paper") {
                humanScore++;
                return "You win! Scissors beats paper.";
            } else {
                return "It's a tie!";
            }
         default:
            return "Invalid input. Please select rock, paper, or scissors.";
    }
}

while (humanScore < 5 && computerScore < 5) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Current score - Player: ${humanScore} Computer: ${computerScore}`);
}

if (humanScore === 5) {
    console.log("Congratulations! You won the game!");
} else {
    console.log("Sorry, you lost the game. Better luck next time!");
}