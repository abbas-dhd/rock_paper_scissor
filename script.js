// function to return a random play by computer.
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    return RockPaperScissor[randomNumber];
}

// function to take input from user, if incorrect input is entered, it will prompt back for proper input.
function playerPlay() {
    let playerSelection;
    let isChecked = false;
    do {
        if (!isChecked) {
            playerSelection = prompt("Enter 'Rock', 'Paper' or 'Scissor'")
                .toLocaleUpperCase()
                .trim();
        } else if (isChecked) {
            playerSelection = prompt(
                "Invalid string! \nEnter 'Rock', 'Paper' or 'Scissor'"
            )
                .toLocaleUpperCase()
                .trim();
        }
        isChecked = true;
    } while (!RockPaperScissor.includes(playerSelection));

    return playerSelection;
}

//function that plays one(1) round of the game.
function playRound(playerSelection, computerSelection) {
    let currentWinner = "";
    console.log(
        "Player: " + playerSelection + " Computer: " + computerSelection
    );

    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSOR" && computerSelection === "PAPER")
    ) {
        currentWinner = "player";
        console.log(
            "Player Wins! " +
                playerSelection +
                " beats " +
                computerSelection +
                "!"
        );
        playerScore++;
    } else if (
        (computerSelection === "ROCK" && playerSelection === "SCISSOR") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSOR" && playerSelection === "PAPER")
    ) {
        currentWinner = "computer";
        console.log(
            "Computer Wins! " +
                computerSelection +
                " beats " +
                playerSelection +
                "!"
        );
        computerScore++;
    } else {
        currentWinner = "tie";
        console.log("Its a tie");
    }

    updateScoreElement(currentWinner, playerSelection, computerSelection);
}

//function that plays actual game with multiple rounds.
function playGame(playerSelection) {
    // const roundCount = 5;
    let computerSelection;

    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
        gameOverTextElement = document.createElement("h1");

        if (playerScore > computerScore) {
            gameOverTextElement.innerHTML = "Player Wins";
            gameOverTextElement.className = "score-info green";
        } else {
            gameOverTextElement.innerHTML = "Computer Wins";
            gameOverTextElement.className = "score-info red";
        }
        mainElement.classList.add("hidden");
        gameOverElement.classList.remove("hidden");
        gameOverElement.appendChild(gameOverTextElement);
    }
    console.log(
        "\ncurrent score\nPlayer: " +
            playerScore +
            " Computer: " +
            computerScore
    );
}

// function to update score in HTML
function updateScoreElement(currentWinner, playerSelection, computerSelection) {
    const playerScoreElement = document.getElementById("playerScore");
    const computerScoreElement = document.getElementById("computerScore");
    const scoreInfoElement = document.querySelector("#scoreInfo");
    const scoreMessageElement = document.querySelector("#scoreMessage");
    playerScoreElement.innerHTML = "Player: " + playerScore;
    computerScoreElement.innerHTML = "Bot: " + computerScore;

    switch (currentWinner) {
        case "player":
            scoreInfoElement.innerHTML = "You Won!";
            scoreInfoElement.classList.remove("red");
            scoreInfoElement.classList.remove("yellow");
            scoreInfoElement.classList.add("green");
            break;
        case "computer":
            scoreInfoElement.innerHTML = "You Lost!";
            scoreInfoElement.classList.remove("green");
            scoreInfoElement.classList.remove("yellow");
            scoreInfoElement.classList.add("red");
            break;
        case "tie":
            scoreInfoElement.innerHTML = "Tied";
            scoreInfoElement.classList.remove("red");
            scoreInfoElement.classList.remove("green");
            scoreInfoElement.classList.add("yellow");
            break;
    }

    scoreMessageElement.innerHTML =
        "You chose " +
        getSignText(playerSelection) +
        " and bot chose " +
        getSignText(computerSelection);
}

// extra function to get emoji from selection
function getSignText(sign) {
    switch (sign) {
        case "ROCK":
            return "✊";
            break;
        case "PAPER":
            return "✋";
            break;
        case "SCISSOR":
            return "✌";
            break;
    }
}

// handler for button click event on selecting weapon
function weaponSelectionHandler(event) {
    console.log(event.currentTarget.getAttribute("id"));
    switch (event.currentTarget.getAttribute("id")) {
        case "rockBtn":
            playerSelection = "ROCK";
            break;
        case "paperBtn":
            playerSelection = "PAPER";
            break;
        case "scissorBtn":
            playerSelection = "SCISSOR";
            break;
        default:
    }

    playGame(playerSelection);
}

// handler function to restart the game (refresh window)
function restartHandler(event) {
    console.log("adsad");

    window.location.reload();
}

const RockPaperScissor = ["ROCK", "PAPER", "SCISSOR"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const startButton = document.querySelector("#start-button");
const mainElement = document.querySelector("main");
const gameOverElement = document.querySelector(".game-over");

startButton.addEventListener("click", function () {
    mainElement.classList.remove("hidden");
    startButton.classList.add("hidden");
});

let weaponButtons = document.querySelectorAll(".btn-square");

weaponButtons.forEach((elem) => {
    elem.addEventListener("click", weaponSelectionHandler);
});

gameOverElement.firstElementChild.addEventListener("click", restartHandler);
