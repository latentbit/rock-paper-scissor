class Game {
    static playerOption = document.querySelector('div:nth-of-type(2)');
    static roundNumber = document.querySelector('span:first-of-type');
    static messageSection = document.querySelectorAll('div > p > span');

    getComputerChoice() {
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

    getPlayerChoice(e) {
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
                this.decideWinner(this.getComputerChoice(), playerChoice);
            }
    }

    decideWinner(computerChoice, playerChoice) {
        if (computerChoice === playerChoice) {
            this.rewriteMessageSection('It\'s a draw!');
        } else if (computerChoice === 'rock' && playerChoice === 'scissors' ||
            computerChoice === 'paper' && playerChoice ==='rock' ||
            computerChoice === 'scissors' && playerChoice === 'paper') {
                this.rewriteMessageSection('Computer wins!', 0, 1)
            } else {
                this.rewriteMessageSection('Player wins!', 1, 0);
            }
        Game.roundNumber.textContent = +Game.roundNumber.textContent + 1;
        this.resetRound();
    }

    rewriteMessageSection(message, playerScore, computerScore) {
        Game.messageSection[0].textContent = message;
        
        Game.messageSection[1].textContent = 
        +Game.messageSection[1].textContent + (playerScore || 0);

        Game.messageSection[2].textContent = 
        +Game.messageSection[2].textContent + (computerScore || 0);
    }

    resetRound() {            
        const playerScore = +Game.messageSection[1].textContent;
        const computerScore = +Game.messageSection[2].textContent;
        if (playerScore === 5 || computerScore === 5) {
            const winner = (playerScore - computerScore > 0) ? 'player' : 'computer';
            Game.messageSection[0].textContent = `${winner} has won! Game restarted.`;
            Game.messageSection[1].textContent = '';
            Game.messageSection[2].textContent = '';
            Game.roundNumber.textContent = 1;
        }
    }
}

const game = new Game;
console.log(Game.prototype)
Game.playerOption.addEventListener('click', game.getPlayerChoice.bind(game));