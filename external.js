gameArray = ['Rock','Paper','Scissors']
let computerSelection = getComputerChoice()

document.getElementsByClassName("").addEventListener("click", displayDate);


//returns a random choice from gameArray
function getComputerChoice() {
    const randomElement = gameArray[Math.floor(Math.random()*gameArray.length)];
    return randomElement
}

//plays one round of Rock Paper and Scissors!
function playRound(playerSelection = prompt("Enter","rock"), computerSelection) {
    let lowerPlayer = playerSelection.toLowerCase()
    
    if (lowerPlayer == computerSelection.toLowerCase()) {
        return "It's a tie!"
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
        return "Try again!"
    }
}
/*
//Five iterations of the game, and declares the winner
function game() {
    let playerWin/* = 0;
    let computerWin = 0;

    for (let i=0; i<5; i++) {
        let a = playRound(playerSelection = prompt("Rock, Paper or Scissors?","rock"), getComputerChoice())
        console.log(a)
        if (a.includes("Win")) {
            playerWin+=1
        }
        else if (a.includes("lose")) {
            computerWin+=1
        }
    }
    
    //declare winner
    if (playerWin > computerWin) {
        console.log("Congratulations! You won. Proud of you.")
    } 

    else if (playerWin < computerWin) {
        console.log("Sorry. You Lost. No worries, you can try again!")
    }

    else if (playerWin==computerWin) {
        console.log("That's a tie!")
    }
    
}
*/

console.log(playRound(playerSelection = prompt("Enter","rock"), computerSelection))