function getBet(bet, funds) {
    if (funds >= bet) {
        funds -= bet;
        return [bet, funds];
    }
    else {
        alert('You don\'t have the money to do that...');
        return [0, funds]
    }
}

function updateFunds(bet, funds, gameState) {
    console.log('this funciton ran');
    switch(gameState) {
        case 'Win':
            return (funds += (+bet * 2));
        case 'Tie':
            return (funds += +bet);
        case 'Loss':
            break;
    }
    
}

export default getBet;
export { updateFunds };