// Computer random choice to play the game: Rock(1), Paper(2) or Scissor(3)
function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
    }
}

// User input to choose between the options in the game.
function getHumanChoice() {

    // Get the user choice and transform the string, having only lowercase letters and no space in the margins.
    let choice = prompt('Write your choice (Rock / Paper / Scissor): ').trim().toLowerCase();

    switch (choice) {
        case 'rock':
            return 'Rock';
        case 'paper':
            return 'Paper';
        case 'scissor':
            return 'Scissor';
    }
}

// Keeping track of the computer and player score
let computerScore = 0;
let humanScore = 0;

// Play a round in the game
function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    // When it's a draw
    if (humanChoice === computerChoice) {

        console.log(`
It's a DRAW! ${humanChoice} VS ${computerChoice} 
PC:  ${computerScore}
YOU: ${humanScore}`);
    }
    // When user wins
    else if (humanChoice === 'Rock'    && computerChoice === 'Scissor' ||
             humanChoice === 'Paper'   && computerChoice === 'Rock'    ||
             humanChoice === 'Scissor' && computerChoice === 'Paper') {

        humanScore++;
        console.log(`
You WIN! ${humanChoice} beats ${computerChoice}!
PC: ${computerScore}
YOU: ${humanScore}`);
    }
    // When user loses
    else {
        computerScore++;
        console.log(`
You LOSE! ${humanChoice} loses to ${computerChoice}!
PC: ${computerScore}
YOU: ${humanScore}`);
    }
}

// Play 5 rounds at once and defines a winner
function playGame() {
    for (i = 0; i < 5; i++) {
       playRound();
    }
    if (humanScore > computerScore) {
        console.log(`
!!! YOU ARE THE WINNER !!!
PC:  ${computerScore}
YOU: ${humanScore}`);

    } else if (computerScore > humanScore) {
        console.log(`
!!! COMPUTER IS THE WINNER !!!
PC:  ${computerScore}
YOU: ${humanScore}`);

    } else {
        console.log(`
!!! DEFINITIVE DRAW !!!
PC:  ${computerScore}
YOU: ${humanScore}`);
    }
}

playGame();