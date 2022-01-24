const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') return userInput;

    else if (userInput === 'paper') return userInput;
    else if (userInput === 'scissors') return userInput;
    else if (userInput === 'bomb') return userInput;
    else {
        return 'invalid choice for game';
    }
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) return 'The game was a tie';

    if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'Computer won' : 'You won!!!';
    }
    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Computer won' : 'You won!!!';
    }
    if (userChoice === 'scissors')
        return computerChoice === 'rock' ? 'Computer won' : 'You won!!!';

    if (userChoice === 'bomb') return 'Congrats!!! you won!!!';


}

const playGame = () => {
    userChoice = getUserChoice('paper');

    computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();