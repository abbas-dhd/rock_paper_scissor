const RockPaperScissor = ["ROCK", "PAPER", "SCISSOR"];
let playerScore = 0;
let computerScore = 0;
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
    console.log(
        "Player: " + playerSelection + " Computer: " + computerSelection
    );

    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSOR" && computerSelection === "PAPER")
    ) {
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
        console.log(
            "Computer Wins! " +
                computerSelection +
                " beats " +
                playerSelection +
                "!"
        );
        computerScore++;
    } else {
        console.log("Its a tie");
    }
}

//function that plays actual game with multiple rounds.
function playGame() {
    const roundCount = 5;
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < roundCount; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        // prettier-ignore
        console.log( "\ncurrent score\nPlayer: " 
        + playerScore + " Computer: " + computerScore);
    }

    if (computerScore < playerScore) console.log("Player Wins!");
    else if (computerScore > playerScore) console.log("computer Wins!");
    else console.log("Its a tie");
}

console.log(
    "Welcome to Rock Paper Scissor Game! \nThis is 5 round game whoever scores more wins!" +
        "\n\nPress click button on webpage to start"
);

// playGame();
