let playerScore=0, computerScore =0;

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const buttonLizard = document.getElementById('button-lizard');
const buttonSpock = document.getElementById('button-spock');

buttonRock.addEventListener('click', function () {
    buttonClicked('Rock');
});
buttonPaper.addEventListener('click', function () {
    buttonClicked('Paper');
});
buttonScissors.addEventListener('click', function () {
    buttonClicked('Scissors');
});
buttonLizard.addEventListener('click', function () {
    buttonClicked('Lizard');
});
buttonSpock.addEventListener('click', function () {
    buttonClicked('Spock');
});

/**
 * Handles the click event of a button by clearing messages and logging the button name.
 *
 * @param {string} argButtonName - The name of the button that was clicked.
 */
function buttonClicked(argButtonName) {
    let playerMove, computerMove;
    clearMessages();
    console.log(argButtonName + ' was clicked');
    playerMove = argButtonName;
    console.log('player\'s move: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 5 + 1);
    console.log('the number drawn: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('computer\'s move: ' + computerMove);
    displayResult(playerMove, computerMove);
    clearResults()
    displayScore(playerScore, computerScore)
}

printMessage('You played: ...' +  ' and Computer played: ...');
printResults(playerScore + ' - ' + computerScore);


