var argButtonName, buttonRock, buttonPaper, buttonScissors, buttonLizard, buttonSpock;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonLizard = document.getElementById('button-lizard');
buttonSpock = document.getElementById('button-spock');

/**
 * Handles the click event of a button by clearing messages and logging the button name.
 *
 * @param {string} argButtonName - The name of the button that was clicked.
 */

var playerScore=0;
var computerScore =0;

function buttonClicked(argButtonName) {
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



