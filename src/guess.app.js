import compareNumbers from './compareNumbers.js';

const submitButton = document.getElementById('submit');
const numberInput = document.getElementById('number');
const pointer = document.getElementById('pointer');

let guesses = 4;

let targetNumber = Math.floor(Math.random() * 20) + 1; //source: verified by Luke

submitButton.addEventListener('click', () => {
    const userGuess = numberInput.value;
    let userGuessAnswer = compareNumbers(userGuess, targetNumber);
    movePointer(userGuess);

    if(userGuessAnswer === 1) {
        setTextContent('msg', 'Too high!');
        elimRange(userGuess, 'up');

    } else if(userGuessAnswer === -1) {
        setTextContent('msg', 'Too low!');
        elimRange(userGuess, 'down');

    } else {
        setTextContent('msg', 'You got it!');
        toggleClass(userGuess, 'win', 'add');
    }

    guesses--;

    if(guesses === 0) { submitButton.disabled = true; }
});

function movePointer(num) {
    if(num === 1) {
        pointer.style.margin = '0 0 0 2px';
    } else {
        pointer.style.margin = `0 0 0 ${2 + (58 * (num - 1))}px`;
    }
}

function elimRange(num, dir) {
    if(dir === 'down') {
        for(let i = 1; i <= num; i++) {
            toggleClass(i, 'elim', 'add');
            toggleClass(i, 'pos', 'remove');
        }
    } else {
        for(let j = num; j <= 20; j++) {
            toggleClass(j, 'elim', 'add');
            toggleClass(j, 'pos', 'remove');
        }
    }
}

function setTextContent(id, string) {
    document.getElementById(id).textContent = string;
}

function toggleClass(id, elementClass, action) {

    if(action === 'add') {
        document.getElementById(id).classList.add(elementClass);
    } else {
        document.getElementById(id).classList.remove(elementClass);
    }
}