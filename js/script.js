var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Returns the name of a move based on the provided move ID.
 * If the move ID is not recognized, it defaults to 'kamień' and logs a message.
 *
 * @param {number} argMoveId - The ID of the move (1 for 'kamień', 2 for 'papier', 3 for 'nożyce').
 * @returns {string} The name of the move corresponding to the given move ID.
 */
function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

/**
 * Displays the result of the game based on the player's and computer's moves.
 *
 * @param {string} argPlayerMove - The move chosen by the player.
 * @param {string} argComputerMove - The move randomly chosen by the computer.
 */
function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else if ((argPlayerMove == 'papier' && argComputerMove == 'kamień')
        || (argPlayerMove == 'nożyce' && argComputerMove == 'papier')
        || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce')) {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);


