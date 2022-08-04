let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanNumber = Math.abs(targetGuess - humanGuess)
    const computerNumber = Math.abs(targetGuess - computerGuess)
    return humanNumber <= computerNumber;
}

const updateScore = str => {
    if (str === 'human') {
        humanScore++;
    } else if (str === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;