import compareNumbers from './compareNumbers.js';

const submitButton = document.getElementById('submit');
const numberInput = document.getElementById('number');
const pointer = document.getElementById('pointer');

let guesses = 4;
let game = true;

setTextContent('guesses', `Ahh jeez you only have ${guesses} guesses left!!`);

let targetNumber = Math.floor(Math.random() * 20) + 1; //source: verified by Luke
let elementsArray = document.getElementsByClassName('button'); //source: getElementsByClassName MDN


[...elementsArray].forEach((elem) => { //source: spread operator idea from stackoverflow.com user madox2
    elem.addEventListener('click', () => { //source: adding event listener to multiple objects idea from stackoverflow user Gmaiolo
        if (game) {

            if (setNumber(elem, numberInput) === 'stop') {
                return;
            }

            const userGuess = numberInput.value;
            let userGuessAnswer = compareNumbers(userGuess, targetNumber);

            movePointer(userGuess);
            gameLogic(userGuessAnswer, userGuess);

            guesses--;

            displayMessage();

            if (guesses === 0) {
                stopGame();

            }
        }
    });
});

function displayMessage() {
    switch (guesses) {
        case 3:
            setTextContent('guesses', `Oh no oh man you only have ${guesses} guesses left now!!!`);
            break;
        case 2:
            setTextContent('guesses', `Ohhhhh god you only have ${guesses} guesses remaining! you can do it!!!!`);
            break;
        case 1:
            setTextContent('guesses', `FFFFFfffhghghghg only ${guesses} guess left!!! ITS NOW OR NEVER`);
            break;
        case 0:
            setTextContent('guesses', `OH NO YOU LOST. THE ANSWER WAS ${targetNumber} LMAO RIP`);
            break;
    }
}

function movePointer(num) {
    if (num === 1) {
        pointer.style.margin = '0 0 0 2px';
    } else {
        pointer.style.margin = `0 0 0 ${2 + (58 * (num - 1))}px`;
    }
}

function elimRange(num, dir) {
    if (dir === 'down') {
        for (let i = 1; i <= num; i++) {
            toggleClass(i, 'elim', 'add');
            toggleClass(i, 'pos', 'remove');
        }
    } else {
        for (let j = num; j <= 20; j++) {
            toggleClass(j, 'elim', 'add');
            toggleClass(j, 'pos', 'remove');
        }
    }
}

function setTextContent(id, string) {
    document.getElementById(id).textContent = string;
}

function toggleClass(id, elementClass, action) {

    if (action === 'add') {
        document.getElementById(id).classList.add(elementClass);
    } else {
        document.getElementById(id).classList.remove(elementClass);
    }
}

function stopGame() {
    [...elementsArray].forEach((elem) => {
        elem.removeAttribute('id'); // source: removeAttribute MDN
    });
    submitButton.disabled = true;
    numberInput.disabled = true;
    game = false;
    guesses = 0;
}

function gameLogic(userGuessAnswer, userGuess) {
    if (userGuessAnswer === 1) {
        setTextContent('msg', 'Too high!');
        elimRange(userGuess, 'up');

    } else if (userGuessAnswer === -1) {
        setTextContent('msg', 'Too low!');
        elimRange(userGuess, 'down');

    } else {
        setTextContent('msg', 'You got it!');
        toggleClass(userGuess, 'win', 'add');
        setTextContent('guesses', 'WOWWY ZOWWY YOU DID IT!! GREAT JORB');
        stopGame();
        return;
    }
}

function setNumber(elem, numberInput) {
    if (elem.id !== 'submit') {
        numberInput.value = elem.id;
    } else {
        if (numberInput.value > 20 || numberInput.value < 1) {
            alert('Please enter a number between 1 and 20!');
            return 'stop';
        }
    }
}