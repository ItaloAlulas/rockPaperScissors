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