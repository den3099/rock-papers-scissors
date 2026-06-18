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

console.log(getComputerChoice());
console.log(getHumanChoice());