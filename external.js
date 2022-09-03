gameArray = ['Rock','Paper','Scissors']
let computerSelection = getComputerChoice()
let playerSelection = prompt("Enter","Rock")

function getComputerChoice() {
    const randomElement = gameArray[Math.floor(Math.random()*gameArray.length)];
    return randomElement
}

function playRound(playerSelection = prompt("Enter","rock"), computerSelection) {
    let lowerPlayer = playerSelection.toLowerCase()
    
    if (lowerPlayer == computerSelection.toLowerCase()) {
        console.log("It's a tie!")
    }

    else if (lowerPlayer=="rock") {
        if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock."
        }
        else if (computerSelection == "Scissors") {
            return "You Win! Rock beats Scissors."
        }
    }

    else if (lowerPlayer=="paper") {
        if (computerSelection == "Rock") {
            return "You Win! Paper beats Rock."
        }
        else if (computerSelection == "Scissors") {
            return "You lose! Scissor beats Paper."
        }
    }

    else if (lowerPlayer=="scissors") {
        if (computerSelection == "Paper") {
            return "You Win! Scissor beats Paper"
        }
        else if (computerSelection == "Rock") {
            return "You lose! Rock beats Scissor."
        }
    }

    else if (lowerPlayer!=gameArray[0,1,2]) {
        console.log("Try again!")
    }
}

console.log(playRound(playerSelection, computerSelection));