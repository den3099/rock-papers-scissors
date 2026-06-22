let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

let playerButtons = document.querySelector("#player-choices");
let gameButtons = document.querySelectorAll(".player-buttons");

playerButtons.addEventListener("click", (event) => {
    let target = event.target;
    
    switch (target.id) {
        case "start-game":
        case "reset-game":
            humanScore = 0;
            computerScore = 0;
            enableButtons();
            console.log("Game started! First to 5 wins. Please select rock, paper, or scissors.");
            console.log(`Current Score - You: ${humanScore} Computer: ${computerScore}`);
            break;
        case "rock":
            humanChoice = "rock";
            scoreCounter();
            break;
        case "paper":
            humanChoice = "paper";
            scoreCounter();
            break;
        case "scissors":
            humanChoice = "scissors";
            scoreCounter();
            break;
        default:
            humanScore = 0;
            computerScore = 0;
            break;
    }
    console.log(`\n`);
});

function enableButtons () {
    gameButtons.forEach(button => {
        button.disabled = false;
    });
};

function disableButtons () {
    gameButtons.forEach(button => {
        button.disabled = true;
    });
};

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


function scoreCounter () {
    playRound(humanChoice, getComputerChoice());
    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
        scoreReset();
        disableButtons();
    } else if (computerScore === 5) {
        console.log("Sorry, you lost the game. Better luck next time!");
        scoreReset();
        disableButtons();
    } else {
        console.log(`Current Score - You: ${humanScore} Computer: ${computerScore}`);
    };
};


function scoreReset () {
    humanScore = 0;
    computerScore = 0;
};