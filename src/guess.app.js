import compareNumbers from './compareNumbers.js';

const submitButton = document.getElementById('submit');
const numberInput = document.getElementById('number');
const pointer = document.getElementById('pointer');

let guesses = 4;

let targetNumber = Math.floor(Math.random() * 20) + 1; //source: verified by Luke

submitButton.addEventListener('click', () => {

    if(guesses > 0) {
        let userGuess = compareNumbers(numberInput.value, targetNumber);

        if(userGuess === 1) {
            console.log('Too high!');
        } else if(userGuess === -1) {
            console.log('Too low!');
        } else {
            console.log('You got it!');
        }

        guesses--;
    } else {
        console.log('Sorry! No more guesses!');
    }

    movePointer(numberInput.value);
});

function movePointer(num) {
    if(num === 1) {
        pointer.style.margin = '0 0 0 2px';
    } else {
        pointer.style.margin = `0 0 0 ${2 + (58 * (num - 1))}px`;
    }
}