import getThrow from './get-throw.js';
import didPlayerWin from './get-play.js';
import getBet from './get-bet.js';
import updateFunds from './get-bet.js';

const playerChoice = document.getElementById('player-choice');
const compChoice = document.getElementById('comp-choice');
const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('loss');
const tieDisplay = document.getElementById('tie');
const result = document.getElementById('result');
const shoot = document.getElementById('shoot');
const betInput = document.getElementById('money-wagered');
const betButton = document.getElementById('bet-button');
const fundsDisplay = document.getElementById('available-funds');
const gameMessage = document.getElementById('game-message');

let win = 0;
let loss = 0;
let tie = 0;
let funds = 20;
let bet = 0;

fundsDisplay.textContent = funds;


betButton.addEventListener('click', () => {
    bet = parseInt(betInput.value);

    [bet, funds] = [getBet(bet, funds)[0], getBet(bet, funds)[1]]
});



const inputArray = [...document.querySelectorAll('label input')];

inputArray.forEach((elem) => {
    elem.addEventListener('click', () => {
        const computerThrow = getThrow();

        const userInput = document.querySelector('input:checked');
        playerChoice.src = `assets/${userInput.value}.png`;
        compChoice.src = `assets/${computerThrow}.png`;

        const gameResult = didPlayerWin(convertToNum(userInput.value), computerThrow);

        result.classList.remove('hidden');
        shoot.classList.remove('hidden');

        switch (gameResult) {
            case 'Win':
                win++;
                winDisplay.textContent = win;
                gameMessage.textContent = 'HOly CraAp you Won?!';
                funds = updateFunds(parseInt(bet), parseInt(funds), gameResult);
                console.log(bet, funds);
                fundsDisplay.textContent = funds;
                break;
            case 'Loss':
                loss++;
                lossDisplay.textContent = loss;
                gameMessage.textContent = 'LOL you lost, get wrektd';
                funds = updateFunds(parseInt(bet), parseInt(funds), gameResult);
                console.log(bet, funds);
                fundsDisplay.textContent = funds;
                break;
            case 'Tie':
                tie++;
                tieDisplay.textContent = tie;
                gameMessage.textContent = 'It was a tie, please try again';
                funds = updateFunds(parseInt(bet), parseInt(funds), gameResult);
                console.log(bet, funds);
                fundsDisplay.textContent = funds;
                break;

        }
    });
});

function convertToNum(playerThrow) {
    switch (playerThrow) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
    }
}