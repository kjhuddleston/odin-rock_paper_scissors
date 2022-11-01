const getComputerChoice = () => {
    let choiceNumber = Math.floor(Math.random() * 3) + 1
    if (choiceNumber === 1) {
        return "rock";
    } else if (choiceNumber === 2) {
        return "paper";
    } else if (choiceNumber === 3) {
        return "scissors";
    }
}

const playerChoice = () => {
    return prompt("Choose rock, paper, or scissors.").toLowerCase()
}

const playRound = (computerChoice, playerChoice) => {
    if (playerChoice === computerChoice) {
        return `Tie, both players picked ${computerChoice}!`
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return `Computer wins with rock crushing scissors!`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return `Player wins with rock crushing scissors!`;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        return `Computer wins with paper covering rock!`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return `Player wins with paper covering rock!`;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return `Computer wins with scissors cutting paper!`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Player wins with scissors cutting paper!';
    } else {
        return 'Invalid slection. Please try again.'
    }
}

const game = () => {
    let playerPoints = 0;
    let computerPoints = 0;
    for (i = 0; i < 5; i++) {
        let result = playRound(getComputerChoice(), playerChoice());
        alert(result);
        console.log(result)
        if (result.substring(0, 6) === 'Player') {
            playerPoints++
        } else if (result.substring(0, 8) === 'Computer') {
            computerPoints++
        }
    }
    if (playerPoints === computerPoints) {
        console.log("It's a tie!")
    } else if (playerPoints > computerPoints) {
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
    }
    console.log(`Player scored ${playerPoints} and the computer scored ${computerPoints}.`)
}

game()