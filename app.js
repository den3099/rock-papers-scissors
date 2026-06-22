let playerScore = 0;
let computerScore = 0;
let playerChoice = "";

let gameSection = document.querySelector("#game-section");
let gameButtons = document.querySelectorAll(".player-buttons");
let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let playerChoiceDisplay = document.querySelector("#player-choice");
let computerChoiceDisplay = document.querySelector("#computer-choice");
let roundResultDisplay = document.querySelector("#round-result");

gameSection.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "start-game":
        case "reset-game":
            playerScore = 0;
            computerScore = 0;
            scoreDisplay();
            enableButtons();
            console.log("Game started! First to 5 wins. Please select rock, paper, or scissors.");
            console.log(`Current Score - You: ${playerScore} Computer: ${computerScore}`);
            break;
        case "rock":
            playerChoice = "rock";
            scoreCounter();
            scoreDisplay();
            break;
        case "paper":
            playerChoice = "paper";
            scoreCounter();
            scoreDisplay();
            break;
        case "scissors":
            playerChoice = "scissors";
            scoreCounter();
            scoreDisplay();
            break;
        default:
            playerScore = 0;
            computerScore = 0;
            scoreDisplay();
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

function scoreDisplay () {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

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


function playRound (playerChoice, computerChoice) {
    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return "It's a tie!";
            } else if (computerChoice === "paper") {
                computerScore++;
                return "You lose! Paper beats rock.";
            } else {
                playerScore++;   
                return "You win! Rock beats scissors.";
            }
        case "paper":
            if (computerChoice === "rock") {
                playerScore++;
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
                playerScore++;
                return "You win! Scissors beats paper.";
            } else {
                return "It's a tie!";
            }
         default:
            return "Invalid input. Please select rock, paper, or scissors.";
    }
}

function scoreCounter () {
    roundResultDisplay.textContent = playRound(playerChoice, getComputerChoice());
    if (playerScore === 5) {
        console.log("Congratulations! You won the game!");
        scoreReset();
        disableButtons();
    } else if (computerScore === 5) {
        console.log("Sorry, you lost the game. Better luck next time!");
        scoreReset();
        disableButtons();
    } else {
        console.log(`Current Score - You: ${playerScore} Computer: ${computerScore}`);
    };
};


function scoreReset () {
    playerScore = 0;
    computerScore = 0;
};