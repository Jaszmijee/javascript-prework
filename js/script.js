var argButtonName, buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

/**
 * Handles the click event of a button by clearing messages and logging the button name.
 *
 * @param {string} argButtonName - The name of the button that was clicked.
 */

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});



