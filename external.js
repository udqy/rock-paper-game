gameArray = ['Rock','Paper','Scissors']
const playerSelection = prompt("Please Enter your choice!","rock");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const randomElement = gameArray[Math.floor(Math.random()*gameArray.length)];
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayer = playerSelection.toLowerCase()
    
    if (lowerPlayer == computerSelection.toLowerCase()) {
        return "It's a tie!"
    }

    else if ((lowerPlayer=="rock" && computerSelection=="Scissors") || (lowerPlayer=="scissors" && computerSelection=="Paper") || (lowerPlayer=="paper" && computerSelection=="Rock")) {
        return "You Win!"
    }

    else if (lowerPlayer!=gameArray[0,1,2]) {
        return "Try again"
    }

    else {
        return "You Lose! lol noob."
    }
}

console.log(playRound(playerSelection, computerSelection));