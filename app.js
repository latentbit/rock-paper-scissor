const playerOption = document.querySelector('div:nth-of-type(2)');
const roundNumber = document.querySelector('span:first-of-type');
const messageSection = document.querySelectorAll('div > p > span');


playerOption.addEventListener('click', e => {
    let playerChoice = undefined;
    switch (e.target.id) {
        case 'rock':
            playerChoice = e.target.id;
            break;
        case 'paper':
            playerChoice = e.target.id;
            break;
        case 'scissors':
            playerChoice = e.target.id;
            break;
    }
    if (playerChoice === 'rock' ||
        playerChoice === 'paper' ||
        playerChoice === 'scissors') {
            decideWinner(getComputerChoice(), playerChoice);
        }
})

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3 + 1);
    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function decideWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        rewriteMessageSection('It\'s a draw!');
    } else if (computerChoice === 'rock' && playerChoice === 'scissors' ||
        computerChoice === 'paper' && playerChoice ==='rock' ||
        computerChoice === 'scissors' && playerChoice === 'paper') {
            rewriteMessageSection('Computer wins!', 0, 1)
        } else {
            rewriteMessageSection('Player wins!', 1, 0);
        }
    roundNumber.textContent = +roundNumber.textContent + 1;
    resetRound();
}

function rewriteMessageSection(message, playerScore, computerScore) {
    messageSection[0].textContent = message;
    
    messageSection[1].textContent = 
    +messageSection[1].textContent + (playerScore || 0);

    messageSection[2].textContent = 
    +messageSection[2].textContent + (computerScore || 0);
}

function resetRound() {            
    const playerScore = +messageSection[1].textContent;
    const computerScore = +messageSection[2].textContent;
    if (playerScore === 5 || computerScore === 5) {
        const winner = (playerScore - computerScore > 0) ? 'player' : 'computer';
        messageSection[0].textContent = `${winner} has won! Game restarted.`;
        messageSection[1].textContent = '';
        messageSection[2].textContent = '';
        roundNumber.textContent = 1;
    }
}