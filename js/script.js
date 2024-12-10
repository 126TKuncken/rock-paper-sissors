function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

 
    document.getElementById('user-choice').innerText = `Your choice: ${capitalize(userChoice)}`;
    document.getElementById('computer-choice').innerText = `Computer's choice: ${capitalize(computerChoice)}`;

    
    const result = determineWinner(userChoice, computerChoice);

    
    document.getElementById('result').innerText = `Result: ${result}`;
}

function getElementById ( userchoice, computerchoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
