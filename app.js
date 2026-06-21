let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

let playerButtons = document.querySelector("#player-choices");


playerButtons.addEventListener("click", (event) => {
    let target = event.target;
    
    switch (target.id) {
        case "rock":
            humanChoice = "rock";
            scoreCounter(humanScore, computerScore);
            break;
        case "paper":
            humanChoice = "paper";
            scoreCounter(humanScore, computerScore);
            break;
        case "scissors":
            humanChoice = "scissors";
            scoreCounter(humanScore, computerScore);
            break;
    }
    console.log(`\n`);
});


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


function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return console.log("It's a tie!");
            } else if (computerChoice === "paper") {
                computerScore++;
                return console.log("You lose! Paper beats rock.");
            } else {
                humanScore++;
                return console.log("You win! Rock beats scissors.");
            }
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                return console.log("You win! Paper beats rock.");
            } else if (computerChoice === "paper") {
                return console.log("It's a tie!");
            } else {
                computerScore++;
                return console.log("You lose! Scissors beats paper.");
            }
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
                return console.log("You lose! Rock beats scissors.");
            } else if (computerChoice === "paper") {
                humanScore++;
                return console.log("You win! Scissors beats paper.");
            } else {
                return console.log("It's a tie!");
            }
         default:
            return console.log("Invalid input. Please select rock, paper, or scissors.");
    }
}


function scoreCounter (humanScore, computerScore) {
    playRound(humanChoice, getComputerChoice());
    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
        scoreReset();
    } else if (computerScore === 5) {
        console.log("Sorry, you lost the game. Better luck next time!");
        scoreReset();
    } else {
        console.log(`Current Score - You: ${humanScore} Computer: ${computerScore}`);
    };
};


function scoreReset () {
    humanScore = 0;
    computerScore = 0;
};