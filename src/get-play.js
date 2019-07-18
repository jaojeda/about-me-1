import getThrow from './get-throw.js';

function didPlayerWin(playerThrow, computerThrow) {

    let compThrowValue;
    switch(computerThrow) {
        case 'rock':
            compThrowValue = 0;
            break;
        case 'paper':
            compThrowValue = 1;
            break;
        case 'scissors':
            compThrowValue = 2;
            break;
    }

    const winLossArray = [[1, 0, 2], [2, 1, 0], [0, 2, 1]];

    switch(winLossArray[playerThrow][compThrowValue]) {
        case 0:
            return 'Loss';
        case 1:
            return 'Tie';
        case 2:
            return 'Win';
    }
}

export default didPlayerWin;