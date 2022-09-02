gameArray = ['Rock','Paper','Scissors']

function getComputerChoice() {
    const randomElement = gameArray[Math.floor(Math.random()*gameArray.length)];
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayer = playerSelection.toLowerCase()
    
    if (lowerPlayer == computerSelection) {
        console.log("It's a tie!")
    }

    else if (
        (lowerPlayer=="rock" && computerSelection=="Scissors")
        || (lowerPlayer=="scissors" && computerSelection=="Paper")
        || (lowerPlayer=="Paper" && computerSelection=="Rock")
        ) {
        console.log("You Win!")
    }

    else {
        console.log("You Lose! lol noob.")
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));