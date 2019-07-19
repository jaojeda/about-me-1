import getThrow from './get-throw.js';
import didPlayerWin from './get-play.js';

const playerChoice = document.getElementById('player-choice');
const compChoice = document.getElementById('comp-choice');
const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('loss');
const tieDisplay = document.getElementById('tie');
const result = document.getElementById('result');
const shoot = document.getElementById('shoot');

let win = 0;
let loss = 0;
let tie = 0;

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

        switch(gameResult) {
            case 'Win':
                win++;
                winDisplay.textContent = win;
                break;
            case 'Loss':
                loss++;
                lossDisplay.textContent = loss;
                break;
            case 'Tie':
                tie++;
                tieDisplay.textContent = tie;
                break;
        }
    });
});

function convertToNum(playerThrow) {
    switch(playerThrow) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
    }
}