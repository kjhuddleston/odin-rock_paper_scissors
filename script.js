const getComputerChoice = () => {
    let choiceNumber = Math.floor(Math.random() * 5) + 1
    if (choiceNumber === 1) {
        return "rock";
    } else if (choiceNumber === 2) {
        return "paper";
    } else if (choiceNumber === 3) {
        return "scissors";
    } else if (choiceNumber === 4) {
        return "lizard";
    } else if (choiceNumber === 5) {
        return "spock";
    }
}

const playRound = (computerChoice, playerChoice) => {
    if (playerChoice === computerChoice) {
        return `Tie, both players picked ${computerChoice}!`;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return 'Computer wins with rock crushing scissors!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Player wins with rock crushing scissors!';
    } else if (computerChoice === 'rock' && playerChoice === 'lizard') {
        return 'Computer wins with rock crushing lizard!';
    } else if (playerChoice === 'rock' && computerChoice === 'lizard') {
        return 'Player wins with rock crushing lizard!';
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        return 'Computer wins with paper covering rock!';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Player wins with paper covering rock!';
    } else if (computerChoice === 'paper' && playerChoice === 'spock') {
        return 'Computer wins with paper disproving spock!';
    } else if (playerChoice === 'paper' && computerChoice === 'spock') {
        return 'Player wins with paper disproving spock!';
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return `Computer wins with scissors cutting paper!`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Player wins with scissors cutting paper!';
    } else if (computerChoice === 'scissors' && playerChoice === 'lizard') {
        return 'Computer wins with scissors decapitating lizard!';
    } else if (playerChoice === 'scissors' && computerChoice === 'lizard') {
        return 'Player wins with scissors decapitating lizard!';
    } else if (computerChoice === 'lizard' && playerChoice === 'spock') {
        return 'Computer wins with lizard poisoning spock!';
    } else if (playerChoice === 'lizard' && computerChoice === 'spock') {
        return 'Player wins with lizard poisoning spock!';
    } else if (computerChoice === 'lizard' && playerChoice === 'paper') {
        return 'Computer wins with lizard eating paper!';
    } else if (playerChoice === 'lizard' && computerChoice === 'paper') {
        return 'Player wins with lizard eating paper!';
    } else if (computerChoice === 'spock' && playerChoice === 'scissors') {
        return 'Computer wins with spock smashing scissors!';
    } else if (playerChoice === 'spock' && computerChoice === 'scissors') {
        return 'Player wins with spock smashing scissors!';
    } else if (computerChoice === 'spock' && playerChoice === 'rock') {
        return 'Computer wins with spock vaporizing rock!';
    } else if (playerChoice === 'spock' && computerChoice === 'rock') {
        return 'Player wins with spock vaporizing rock!';
    } else {
        return 'Invalid slection. Please try again.';
    }
}

let playerPoints = 0;
let computerPoints = 0;

const playerScore = document.querySelector('#playerScore');
playerScore.innerText = `Player: ${playerPoints}`;
const computerScore = document.querySelector('#computerScore');
computerScore.innerText = `Computer: ${computerPoints}`;

const resultDisplay = document.querySelector('#resultDisplay');
resultDisplay.innerText = 'Lets play rock, paper, scissors, lizard, spock!\n' + 
'\nClick a button to begin.';

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    game('rock');
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    game('paper');
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    game('scissors');
});

const lizardBtn = document.querySelector('#lizard');
lizardBtn.addEventListener('click', () => {
    game('lizard');
});

const spockBtn = document.querySelector('#spock');
spockBtn.addEventListener('click', () => {
    game('spock');
});
    
const game = (playerChoice) => {
    let result = playRound(getComputerChoice(), playerChoice);
    resultDisplay.innerText = result;
    if (result.substring(0, 6) === 'Player') {
        playerPoints++;
    } else if (result.substring(0, 8)==='Computer') {
        computerPoints++;
    }
    playerScore.innerText = `Player: ${playerPoints}`;
    computerScore.innerText = `Computer: ${computerPoints}`;

    if (playerPoints >= 5) {
        alert('You won!');
        playerPoints = 0;
        computerPoints = 0;
        playerScore.innerText = `Player: ${playerPoints}`;
        computerScore.innerText = `Computer: ${computerPoints}`;
        resultDisplay.innerText = 'Lets play again!';
    }
    if (computerPoints >= 5) {
        alert('The computer wins. Try again!');
        playerPoints = 0;
        computerPoints = 0;
        playerScore.innerText = `Player: ${playerPoints}`;
        computerScore.innerText = `Computer: ${computerPoints}`;
        resultDisplay.innerText = 'Lets play again!';
    }
}