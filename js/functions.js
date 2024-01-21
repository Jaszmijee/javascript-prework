function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function printResults(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('results').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function clearResults() {
    document.getElementById('results').innerHTML = '';
}

/**
 * Returns the name of a move based on the provided move ID.
 * If the move ID is not recognized, it defaults to 'kamień' and logs a message.
 *
 * @param {number} argMoveId - The ID of the move (1 for 'kamień', 2 for 'papier', 3 for 'nożyce').
 * @returns {string} The name of the move corresponding to the given move ID.
 */
function getMoveName(argMoveId) {
    console.log('getMoveName function called with argument: ' + argMoveId);
    if (argMoveId == 1) {
        return 'Rock';
    } else if (argMoveId == 2) {
        return 'Paper';
    } else if (argMoveId == 3) {
        return 'Scissors';
    } else if (argMoveId == 4) {
        return 'Lizard';
    } else {
        return 'Spock';
    }
}

/**
 * Displays the result of the game based on the player's and computer's moves.
 *
 * @param {string} argPlayerMove - The move chosen by the player.
 * @param {string} argComputerMove - The move randomly chosen by the computer.
 */
function displayResult(argPlayerMove, argComputerMove) {
    console.log('displayResults function called with arguments: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == argComputerMove) {
        printMessage('It\'s a tie!');
    } else if (argPlayerMove == 'Rock' && (argComputerMove == 'Scissors' || argComputerMove == 'Lizard')) {
        playerScore++;
        printMessage('You Win!');
    } else if (argPlayerMove == 'Scissors' && (argComputerMove == 'Paper' || argComputerMove == 'Lizard')) {
        playerScore++;
        printMessage('You Win!');
    } else if (argPlayerMove == 'Paper' && (argComputerMove == 'Rock' || argComputerMove == 'Spock')) {
        playerScore++;
        printMessage('You Win!');
    } else if (argPlayerMove == 'Lizard' && (argComputerMove == 'Paper' || argComputerMove == 'Spock')) {
        playerScore++;
        printMessage('You Win!');
    } else if (argPlayerMove == 'Spock' && (argComputerMove == 'Rock' || argComputerMove == 'Scissors')) {
        playerScore++;
        printMessage('You Win!');
    } else {
        computerScore++;
        printMessage('You Lose :(');
    }
    printMessage('You played: ' + argPlayerMove + ' and Computer played: ' + argComputerMove);
}

function displayScore(playerScore, computerScore) {
    printResults(playerScore + ' - ' + computerScore);
}
