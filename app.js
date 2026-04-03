console.log("Ur gay");

//RUN a function that plays 5 rounds
    // RESET each player's score to 0
    // GET player choice, put it in a variable
    // GET computer choice
        // GET a random number from a variable
        // Turn the number to a human readable choice (Rock, paper, scissors)
    // Determine who wins using conditional statements
        //Increase the winner's score by one

//Print the final results after 5 rounds, like so:
/* FINAL RESULTS:
    Player score: <...>
    Computer score: <...>
    => <winner> wins and is <...> score higher than <...> 
    (OR: It's a tie!)
*/


let computerScore = 0;
let playerScore = 0;

function startGame() {
    computerScore = 0;
    playerScore = 0;
    for ( let i=0 ; i<5 ; i++ ) {
        playRound()
    }
    decideWinner();
}

function playRound() {
    const computerChoice = getComputerChoice();
    let playerChoice = prompt("Rock, paper, scissor??: ").toLowerCase();
    while (playerChoice !== "rock"
        && playerChoice !== "paper"
        && playerChoice !== "scissor"
    ) {
        playerChoice = prompt("WRONG SPELLINGG, try again: ").toLowerCase();
    }

    checkRoundWinner(playerChoice, computerChoice);
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1;
    switch (randomNumber) {
        case (1):
            return "rock";
        case (2):
            return "paper";
        case (3):
            return "scissor";
    }
}

function checkRoundWinner(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissor"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissor" && computerChoice === "paper"
    ) {
        playerScore += 1;
    } else if (playerChoice === computerChoice) {
        //Do nothing
    } else {
        computerScore += 1;
    }
}

function decideWinner() {
    console.log(`FINAL RESULTS:
        Player score: ${playerScore}
        Computer score: ${computerScore}`)
    if (playerScore > computerScore) {
        console.log(`-> Player wins and is ${playerScore - computerScore} score higher than compyuterrrr !`);
    } else if (playerScore < computerScore) {
        console.log(`-> Computer wins and is ${computerScore - playerScore} score higher than playerrrr !`);
    } else {
        console.log(`-> It's a tie ! `);
}
}

startGame()