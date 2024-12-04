function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    
    document.getElementById('user-choice').innerText = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer's choice: ${computerChoice}`;

    
    let result = '';
    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

   
    document.getElementById('result').innerText = `Result: ${result}`;
}
